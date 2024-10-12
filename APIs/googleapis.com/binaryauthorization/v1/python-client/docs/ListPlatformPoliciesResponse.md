# ListPlatformPoliciesResponse

Response message for PlatformPolicyManagementService.ListPlatformPolicies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListPlatformPoliciesRequest.page_token field in the subsequent call to the &#x60;ListPlatformPolicies&#x60; method to retrieve the next page of results. | [optional] 
**platform_policies** | [**List[PlatformPolicy]**](PlatformPolicy.md) | The list of platform policies. | [optional] 

## Example

```python
from openapi_client.models.list_platform_policies_response import ListPlatformPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlatformPoliciesResponse from a JSON string
list_platform_policies_response_instance = ListPlatformPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPlatformPoliciesResponse.to_json())

# convert the object into a dict
list_platform_policies_response_dict = list_platform_policies_response_instance.to_dict()
# create an instance of ListPlatformPoliciesResponse from a dict
list_platform_policies_response_from_dict = ListPlatformPoliciesResponse.from_dict(list_platform_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


