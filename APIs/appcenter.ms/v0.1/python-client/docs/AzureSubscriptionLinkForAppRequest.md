# AzureSubscriptionLinkForAppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **str** | The azure subscription id | 

## Example

```python
from openapi_client.models.azure_subscription_link_for_app_request import AzureSubscriptionLinkForAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSubscriptionLinkForAppRequest from a JSON string
azure_subscription_link_for_app_request_instance = AzureSubscriptionLinkForAppRequest.from_json(json)
# print the JSON string representation of the object
print(AzureSubscriptionLinkForAppRequest.to_json())

# convert the object into a dict
azure_subscription_link_for_app_request_dict = azure_subscription_link_for_app_request_instance.to_dict()
# create an instance of AzureSubscriptionLinkForAppRequest from a dict
azure_subscription_link_for_app_request_from_dict = AzureSubscriptionLinkForAppRequest.from_dict(azure_subscription_link_for_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


