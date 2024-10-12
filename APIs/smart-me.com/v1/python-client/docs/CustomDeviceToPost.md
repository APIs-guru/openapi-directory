# CustomDeviceToPost

Container Class for the Web API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the device | [optional] 
**name** | **str** | The Name of the Device | [optional] 
**serial** | **int** | The Serial number | [optional] 
**value_date** | **datetime** | The Date of the Value (in UTC). If this is null the Server Time is used. | [optional] 
**values** | [**List[CustomDeviceValues]**](CustomDeviceValues.md) | The Values of the custom Device | [optional] 

## Example

```python
from openapi_client.models.custom_device_to_post import CustomDeviceToPost

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDeviceToPost from a JSON string
custom_device_to_post_instance = CustomDeviceToPost.from_json(json)
# print the JSON string representation of the object
print(CustomDeviceToPost.to_json())

# convert the object into a dict
custom_device_to_post_dict = custom_device_to_post_instance.to_dict()
# create an instance of CustomDeviceToPost from a dict
custom_device_to_post_from_dict = CustomDeviceToPost.from_dict(custom_device_to_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


