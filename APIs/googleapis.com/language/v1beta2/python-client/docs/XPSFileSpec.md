# XPSFileSpec

Spec of input and output files, on external file systems (CNS, GCS, etc).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_path** | **str** | Deprecated. Use file_spec. | [optional] 
**file_format** | **str** |  | [optional] 
**file_spec** | **str** | Single file path, or file pattern of format \&quot;/path/to/file@shard_count\&quot;. E.g. /cns/cell-d/somewhere/file@2 is expanded to two files: /cns/cell-d/somewhere/file-00000-of-00002 and /cns/cell-d/somewhere/file-00001-of-00002. | [optional] 
**single_file_path** | **str** | Deprecated. Use file_spec. | [optional] 

## Example

```python
from openapi_client.models.xps_file_spec import XPSFileSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSFileSpec from a JSON string
xps_file_spec_instance = XPSFileSpec.from_json(json)
# print the JSON string representation of the object
print(XPSFileSpec.to_json())

# convert the object into a dict
xps_file_spec_dict = xps_file_spec_instance.to_dict()
# create an instance of XPSFileSpec from a dict
xps_file_spec_from_dict = XPSFileSpec.from_dict(xps_file_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


