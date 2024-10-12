# IosDeviceCatalog

The currently supported iOS devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[IosModel]**](IosModel.md) | The set of supported iOS device models. | [optional] 
**runtime_configuration** | [**IosRuntimeConfiguration**](IosRuntimeConfiguration.md) |  | [optional] 
**versions** | [**List[IosVersion]**](IosVersion.md) | The set of supported iOS software versions. | [optional] 
**xcode_versions** | [**List[XcodeVersion]**](XcodeVersion.md) | The set of supported Xcode versions. | [optional] 

## Example

```python
from openapi_client.models.ios_device_catalog import IosDeviceCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of IosDeviceCatalog from a JSON string
ios_device_catalog_instance = IosDeviceCatalog.from_json(json)
# print the JSON string representation of the object
print(IosDeviceCatalog.to_json())

# convert the object into a dict
ios_device_catalog_dict = ios_device_catalog_instance.to_dict()
# create an instance of IosDeviceCatalog from a dict
ios_device_catalog_from_dict = IosDeviceCatalog.from_dict(ios_device_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


