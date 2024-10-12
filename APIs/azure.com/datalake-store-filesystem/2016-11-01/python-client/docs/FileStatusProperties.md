# FileStatusProperties

Data Lake Store file or directory information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_time** | **int** | the last access time as ticks since the epoch. | [optional] [readonly] 
**acl_bit** | **bool** | flag to indicate if extended acls are enabled  | [optional] [readonly] 
**block_size** | **int** | the block size for the file. | [optional] [readonly] 
**group** | **str** | the group owner. | [optional] [readonly] 
**length** | **int** | the number of bytes in a file. | [optional] [readonly] 
**modification_time** | **int** | the modification time as ticks since the epoch. | [optional] [readonly] 
**ms_expiration_time** | **int** | Gets the expiration time, if any, as ticks since the epoch. If the value is 0 or DateTime.MaxValue there is no expiration. | [optional] [readonly] 
**owner** | **str** | the user who is the owner. | [optional] [readonly] 
**path_suffix** | **str** | the path suffix. | [optional] [readonly] 
**permission** | **str** | the permission represented as an string. | [optional] [readonly] 
**type** | **str** | the type of the path object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_status_properties import FileStatusProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileStatusProperties from a JSON string
file_status_properties_instance = FileStatusProperties.from_json(json)
# print the JSON string representation of the object
print(FileStatusProperties.to_json())

# convert the object into a dict
file_status_properties_dict = file_status_properties_instance.to_dict()
# create an instance of FileStatusProperties from a dict
file_status_properties_from_dict = FileStatusProperties.from_dict(file_status_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


