# PoliciesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**kind** | **str** | Type of resource. | [optional] [default to 'dns#policiesListResponse']
**next_page_token** | **str** | The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token. This lets you the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. | [optional] 
**policies** | [**List[Policy]**](Policy.md) | The policy resources. | [optional] 

## Example

```python
from openapi_client.models.policies_list_response import PoliciesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PoliciesListResponse from a JSON string
policies_list_response_instance = PoliciesListResponse.from_json(json)
# print the JSON string representation of the object
print(PoliciesListResponse.to_json())

# convert the object into a dict
policies_list_response_dict = policies_list_response_instance.to_dict()
# create an instance of PoliciesListResponse from a dict
policies_list_response_from_dict = PoliciesListResponse.from_dict(policies_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


