# ObbFile

An opaque binary blob file to install on the device before the test starts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**obb** | [**FileReference**](FileReference.md) |  | [optional] 
**obb_file_name** | **str** | Required. OBB file name which must conform to the format as specified by Android e.g. [main|patch].0300110.com.example.android.obb which will be installed into /Android/obb// on the device. | [optional] 

## Example

```python
from openapi_client.models.obb_file import ObbFile

# TODO update the JSON string below
json = "{}"
# create an instance of ObbFile from a JSON string
obb_file_instance = ObbFile.from_json(json)
# print the JSON string representation of the object
print(ObbFile.to_json())

# convert the object into a dict
obb_file_dict = obb_file_instance.to_dict()
# create an instance of ObbFile from a dict
obb_file_from_dict = ObbFile.from_dict(obb_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


