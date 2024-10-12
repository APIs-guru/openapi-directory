# ExternalSubscription

Details of an external subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_type** | **str** | Required. The type of the external subscription. | [optional] 

## Example

```python
from openapi_client.models.external_subscription import ExternalSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubscription from a JSON string
external_subscription_instance = ExternalSubscription.from_json(json)
# print the JSON string representation of the object
print(ExternalSubscription.to_json())

# convert the object into a dict
external_subscription_dict = external_subscription_instance.to_dict()
# create an instance of ExternalSubscription from a dict
external_subscription_from_dict = ExternalSubscription.from_dict(external_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


