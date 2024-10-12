# ListAccessPoliciesResponse

A response to `ListAccessPoliciesRequest`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policies** | [**List[AccessPolicy]**](AccessPolicy.md) | List of the AccessPolicy instances. | [optional] 
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 

## Example

```python
from openapi_client.models.list_access_policies_response import ListAccessPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccessPoliciesResponse from a JSON string
list_access_policies_response_instance = ListAccessPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccessPoliciesResponse.to_json())

# convert the object into a dict
list_access_policies_response_dict = list_access_policies_response_instance.to_dict()
# create an instance of ListAccessPoliciesResponse from a dict
list_access_policies_response_from_dict = ListAccessPoliciesResponse.from_dict(list_access_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


