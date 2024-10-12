# ShareSubscription

A share subscription data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ShareSubscriptionProperties**](ShareSubscriptionProperties.md) |  | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_subscription import ShareSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSubscription from a JSON string
share_subscription_instance = ShareSubscription.from_json(json)
# print the JSON string representation of the object
print(ShareSubscription.to_json())

# convert the object into a dict
share_subscription_dict = share_subscription_instance.to_dict()
# create an instance of ShareSubscription from a dict
share_subscription_from_dict = ShareSubscription.from_dict(share_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


