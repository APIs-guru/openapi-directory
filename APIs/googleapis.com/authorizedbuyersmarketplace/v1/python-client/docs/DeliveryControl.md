# DeliveryControl

Message contains details about how the deal will be paced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companion_delivery_type** | **str** | Output only. Specifies roadblocking in a main companion lineitem. | [optional] [readonly] 
**creative_rotation_type** | **str** | Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available. | [optional] [readonly] 
**delivery_rate_type** | **str** | Output only. Specifies how the impression delivery will be paced. | [optional] [readonly] 
**frequency_cap** | [**List[FrequencyCap]**](FrequencyCap.md) | Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest. | [optional] [readonly] 
**roadblocking_type** | **str** | Output only. Specifies the roadblocking type in display creatives. | [optional] [readonly] 

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


