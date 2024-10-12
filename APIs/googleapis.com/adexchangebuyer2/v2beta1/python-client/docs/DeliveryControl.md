# DeliveryControl

Message contains details about how the deals will be paced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_blocking_level** | **str** | Output only. Specified the creative blocking levels to be applied. | [optional] [readonly] 
**delivery_rate_type** | **str** | Output only. Specifies how the impression delivery will be paced. | [optional] [readonly] 
**frequency_caps** | [**List[FrequencyCap]**](FrequencyCap.md) | Output only. Specifies any frequency caps. | [optional] [readonly] 

## Example

```python
from openapi_client.models.delivery_control import DeliveryControl

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryControl from a JSON string
delivery_control_instance = DeliveryControl.from_json(json)
# print the JSON string representation of the object
print(DeliveryControl.to_json())

# convert the object into a dict
delivery_control_dict = delivery_control_instance.to_dict()
# create an instance of DeliveryControl from a dict
delivery_control_from_dict = DeliveryControl.from_dict(delivery_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


