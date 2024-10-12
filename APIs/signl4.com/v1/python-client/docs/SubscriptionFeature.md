# SubscriptionFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **int** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.subscription_feature import SubscriptionFeature

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFeature from a JSON string
subscription_feature_instance = SubscriptionFeature.from_json(json)
# print the JSON string representation of the object
print(SubscriptionFeature.to_json())

# convert the object into a dict
subscription_feature_dict = subscription_feature_instance.to_dict()
# create an instance of SubscriptionFeature from a dict
subscription_feature_from_dict = SubscriptionFeature.from_dict(subscription_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


