# Variant

APK that is suitable for inclusion in a system image. The resource of SystemApksService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_spec** | [**DeviceSpec**](DeviceSpec.md) |  | [optional] 
**options** | [**SystemApkOptions**](SystemApkOptions.md) |  | [optional] 
**variant_id** | **int** | Output only. The ID of a previously created system APK variant. | [optional] [readonly] 

## Example

```python
from openapi_client.models.variant import Variant

# TODO update the JSON string below
json = "{}"
# create an instance of Variant from a JSON string
variant_instance = Variant.from_json(json)
# print the JSON string representation of the object
print(Variant.to_json())

# convert the object into a dict
variant_dict = variant_instance.to_dict()
# create an instance of Variant from a dict
variant_from_dict = Variant.from_dict(variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


