# DeliveryConfig

The settings for a subscription's message delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_requirement** | **str** | The DeliveryRequirement for this subscription. | [optional] 

## Example

```python
from openapi_client.models.delivery_config import DeliveryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryConfig from a JSON string
delivery_config_instance = DeliveryConfig.from_json(json)
# print the JSON string representation of the object
print(DeliveryConfig.to_json())

# convert the object into a dict
delivery_config_dict = delivery_config_instance.to_dict()
# create an instance of DeliveryConfig from a dict
delivery_config_from_dict = DeliveryConfig.from_dict(delivery_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


