# AzureSubscriptionPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_billing** | **bool** | If the subscription is used for billing | 

## Example

```python
from openapi_client.models.azure_subscription_patch_request import AzureSubscriptionPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSubscriptionPatchRequest from a JSON string
azure_subscription_patch_request_instance = AzureSubscriptionPatchRequest.from_json(json)
# print the JSON string representation of the object
print(AzureSubscriptionPatchRequest.to_json())

# convert the object into a dict
azure_subscription_patch_request_dict = azure_subscription_patch_request_instance.to_dict()
# create an instance of AzureSubscriptionPatchRequest from a dict
azure_subscription_patch_request_from_dict = AzureSubscriptionPatchRequest.from_dict(azure_subscription_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


