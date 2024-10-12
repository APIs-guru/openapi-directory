# PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.private_link_services_list_by_subscription_default_response_details_inner import PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner from a JSON string
private_link_services_list_by_subscription_default_response_details_inner_instance = PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner.to_json())

# convert the object into a dict
private_link_services_list_by_subscription_default_response_details_inner_dict = private_link_services_list_by_subscription_default_response_details_inner_instance.to_dict()
# create an instance of PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner from a dict
private_link_services_list_by_subscription_default_response_details_inner_from_dict = PrivateLinkServicesListBySubscriptionDefaultResponseDetailsInner.from_dict(private_link_services_list_by_subscription_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


