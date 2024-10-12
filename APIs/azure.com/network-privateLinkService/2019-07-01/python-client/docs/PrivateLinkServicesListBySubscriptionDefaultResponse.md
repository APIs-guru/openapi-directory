# PrivateLinkServicesListBySubscriptionDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner]**](PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.private_link_services_list_by_subscription_default_response import PrivateLinkServicesListBySubscriptionDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServicesListBySubscriptionDefaultResponse from a JSON string
private_link_services_list_by_subscription_default_response_instance = PrivateLinkServicesListBySubscriptionDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServicesListBySubscriptionDefaultResponse.to_json())

# convert the object into a dict
private_link_services_list_by_subscription_default_response_dict = private_link_services_list_by_subscription_default_response_instance.to_dict()
# create an instance of PrivateLinkServicesListBySubscriptionDefaultResponse from a dict
private_link_services_list_by_subscription_default_response_from_dict = PrivateLinkServicesListBySubscriptionDefaultResponse.from_dict(private_link_services_list_by_subscription_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


