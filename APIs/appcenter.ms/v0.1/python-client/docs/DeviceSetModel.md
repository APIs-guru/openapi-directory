# DeviceSetModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_factor** | **str** |  | [optional] 
**manufacturer** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**release_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_set_model import DeviceSetModel

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSetModel from a JSON string
device_set_model_instance = DeviceSetModel.from_json(json)
# print the JSON string representation of the object
print(DeviceSetModel.to_json())

# convert the object into a dict
device_set_model_dict = device_set_model_instance.to_dict()
# create an instance of DeviceSetModel from a dict
device_set_model_from_dict = DeviceSetModel.from_dict(device_set_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


