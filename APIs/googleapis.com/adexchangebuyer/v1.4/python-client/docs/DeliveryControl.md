# DeliveryControl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_blocking_level** | **str** |  | [optional] 
**delivery_rate_type** | **str** |  | [optional] 
**frequency_caps** | [**List[DeliveryControlFrequencyCap]**](DeliveryControlFrequencyCap.md) |  | [optional] 

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


