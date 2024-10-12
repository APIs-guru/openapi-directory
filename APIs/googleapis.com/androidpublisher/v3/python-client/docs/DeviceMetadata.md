# DeviceMetadata

Characteristics of the user's device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_make** | **str** | Device CPU make, e.g. \&quot;Qualcomm\&quot; | [optional] 
**cpu_model** | **str** | Device CPU model, e.g. \&quot;MSM8974\&quot; | [optional] 
**device_class** | **str** | Device class (e.g. tablet) | [optional] 
**gl_es_version** | **int** | OpenGL version | [optional] 
**manufacturer** | **str** | Device manufacturer (e.g. Motorola) | [optional] 
**native_platform** | **str** | Comma separated list of native platforms (e.g. \&quot;arm\&quot;, \&quot;arm7\&quot;) | [optional] 
**product_name** | **str** | Device model name (e.g. Droid) | [optional] 
**ram_mb** | **int** | Device RAM in Megabytes, e.g. \&quot;2048\&quot; | [optional] 
**screen_density_dpi** | **int** | Screen density in DPI | [optional] 
**screen_height_px** | **int** | Screen height in pixels | [optional] 
**screen_width_px** | **int** | Screen width in pixels | [optional] 

## Example

```python
from openapi_client.models.device_metadata import DeviceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceMetadata from a JSON string
device_metadata_instance = DeviceMetadata.from_json(json)
# print the JSON string representation of the object
print(DeviceMetadata.to_json())

# convert the object into a dict
device_metadata_dict = device_metadata_instance.to_dict()
# create an instance of DeviceMetadata from a dict
device_metadata_from_dict = DeviceMetadata.from_dict(device_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


