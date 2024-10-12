# SubscriptionMediaServiceCollection

A collection of SubscriptionMediaService items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[SubscriptionMediaService]**](SubscriptionMediaService.md) | A collection of SubscriptionMediaService items. | [optional] 

## Example

```python
from openapi_client.models.subscription_media_service_collection import SubscriptionMediaServiceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionMediaServiceCollection from a JSON string
subscription_media_service_collection_instance = SubscriptionMediaServiceCollection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionMediaServiceCollection.to_json())

# convert the object into a dict
subscription_media_service_collection_dict = subscription_media_service_collection_instance.to_dict()
# create an instance of SubscriptionMediaServiceCollection from a dict
subscription_media_service_collection_from_dict = SubscriptionMediaServiceCollection.from_dict(subscription_media_service_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


