# ResponsePoliciesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**next_page_token** | **str** | The presence of this field indicates that more results exist following your last page of results in pagination order. To fetch them, make another list request by using this value as your page token. This lets you view the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a consistent snapshot of a collection larger than the maximum page size. | [optional] 
**response_policies** | [**List[ResponsePolicy]**](ResponsePolicy.md) | The Response Policy resources. | [optional] 

## Example

```python
from openapi_client.models.response_policies_list_response import ResponsePoliciesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePoliciesListResponse from a JSON string
response_policies_list_response_instance = ResponsePoliciesListResponse.from_json(json)
# print the JSON string representation of the object
print(ResponsePoliciesListResponse.to_json())

# convert the object into a dict
response_policies_list_response_dict = response_policies_list_response_instance.to_dict()
# create an instance of ResponsePoliciesListResponse from a dict
response_policies_list_response_from_dict = ResponsePoliciesListResponse.from_dict(response_policies_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


