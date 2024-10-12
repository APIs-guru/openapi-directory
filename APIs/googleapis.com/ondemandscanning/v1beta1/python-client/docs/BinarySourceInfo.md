# BinarySourceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_version** | [**PackageVersion**](PackageVersion.md) |  | [optional] 
**source_version** | [**PackageVersion**](PackageVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.binary_source_info import BinarySourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BinarySourceInfo from a JSON string
binary_source_info_instance = BinarySourceInfo.from_json(json)
# print the JSON string representation of the object
print(BinarySourceInfo.to_json())

# convert the object into a dict
binary_source_info_dict = binary_source_info_instance.to_dict()
# create an instance of BinarySourceInfo from a dict
binary_source_info_from_dict = BinarySourceInfo.from_dict(binary_source_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


