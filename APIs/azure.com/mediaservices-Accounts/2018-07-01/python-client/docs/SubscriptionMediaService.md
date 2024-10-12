# SubscriptionMediaService

A Media Services account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MediaServiceProperties**](MediaServiceProperties.md) |  | [optional] 
**location** | **str** | The Azure Region of the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_media_service import SubscriptionMediaService

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionMediaService from a JSON string
subscription_media_service_instance = SubscriptionMediaService.from_json(json)
# print the JSON string representation of the object
print(SubscriptionMediaService.to_json())

# convert the object into a dict
subscription_media_service_dict = subscription_media_service_instance.to_dict()
# create an instance of SubscriptionMediaService from a dict
subscription_media_service_from_dict = SubscriptionMediaService.from_dict(subscription_media_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


