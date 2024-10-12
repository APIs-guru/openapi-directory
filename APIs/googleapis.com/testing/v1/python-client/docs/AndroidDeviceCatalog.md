# AndroidDeviceCatalog

The currently supported Android devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[AndroidModel]**](AndroidModel.md) | The set of supported Android device models. | [optional] 
**runtime_configuration** | [**AndroidRuntimeConfiguration**](AndroidRuntimeConfiguration.md) |  | [optional] 
**versions** | [**List[AndroidVersion]**](AndroidVersion.md) | The set of supported Android OS versions. | [optional] 

## Example

```python
from openapi_client.models.android_device_catalog import AndroidDeviceCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidDeviceCatalog from a JSON string
android_device_catalog_instance = AndroidDeviceCatalog.from_json(json)
# print the JSON string representation of the object
print(AndroidDeviceCatalog.to_json())

# convert the object into a dict
android_device_catalog_dict = android_device_catalog_instance.to_dict()
# create an instance of AndroidDeviceCatalog from a dict
android_device_catalog_from_dict = AndroidDeviceCatalog.from_dict(android_device_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


