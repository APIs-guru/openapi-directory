# DeliveryControlFrequencyCap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_impressions** | **int** |  | [optional] 
**num_time_units** | **int** |  | [optional] 
**time_unit_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.delivery_control_frequency_cap import DeliveryControlFrequencyCap

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryControlFrequencyCap from a JSON string
delivery_control_frequency_cap_instance = DeliveryControlFrequencyCap.from_json(json)
# print the JSON string representation of the object
print(DeliveryControlFrequencyCap.to_json())

# convert the object into a dict
delivery_control_frequency_cap_dict = delivery_control_frequency_cap_instance.to_dict()
# create an instance of DeliveryControlFrequencyCap from a dict
delivery_control_frequency_cap_from_dict = DeliveryControlFrequencyCap.from_dict(delivery_control_frequency_cap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


