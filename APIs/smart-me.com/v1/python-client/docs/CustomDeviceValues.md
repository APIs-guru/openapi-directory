# CustomDeviceValues

Container Class for the Custom Device Values

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Name of the Value. | [optional] 
**value** | **float** | The Value | [optional] 

## Example

```python
from openapi_client.models.custom_device_values import CustomDeviceValues

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDeviceValues from a JSON string
custom_device_values_instance = CustomDeviceValues.from_json(json)
# print the JSON string representation of the object
print(CustomDeviceValues.to_json())

# convert the object into a dict
custom_device_values_dict = custom_device_values_instance.to_dict()
# create an instance of CustomDeviceValues from a dict
custom_device_values_from_dict = CustomDeviceValues.from_dict(custom_device_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


