# SubscriptionCollection

Paged Subscriptions list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[SubscriptionContract]**](SubscriptionContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.subscription_collection import SubscriptionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCollection from a JSON string
subscription_collection_instance = SubscriptionCollection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCollection.to_json())

# convert the object into a dict
subscription_collection_dict = subscription_collection_instance.to_dict()
# create an instance of SubscriptionCollection from a dict
subscription_collection_from_dict = SubscriptionCollection.from_dict(subscription_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


