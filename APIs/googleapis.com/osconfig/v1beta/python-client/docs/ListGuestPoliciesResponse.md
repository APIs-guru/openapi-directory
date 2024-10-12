# ListGuestPoliciesResponse

A response message for listing guest policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_policies** | [**List[GuestPolicy]**](GuestPolicy.md) | The list of GuestPolicies. | [optional] 
**next_page_token** | **str** | A pagination token that can be used to get the next page of guest policies. | [optional] 

## Example

```python
from openapi_client.models.list_guest_policies_response import ListGuestPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGuestPoliciesResponse from a JSON string
list_guest_policies_response_instance = ListGuestPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGuestPoliciesResponse.to_json())

# convert the object into a dict
list_guest_policies_response_dict = list_guest_policies_response_instance.to_dict()
# create an instance of ListGuestPoliciesResponse from a dict
list_guest_policies_response_from_dict = ListGuestPoliciesResponse.from_dict(list_guest_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


