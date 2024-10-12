# FileProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_length** | **int** |  | 
**content_type** | **str** |  | [optional] 
**creation_time** | **datetime** | The creation time is not returned for files on Linux compute nodes. | [optional] 
**file_mode** | **str** | The file mode is returned only for files on Linux compute nodes. | [optional] 
**last_modified** | **datetime** |  | 

## Example

```python
from openapi_client.models.file_properties import FileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileProperties from a JSON string
file_properties_instance = FileProperties.from_json(json)
# print the JSON string representation of the object
print(FileProperties.to_json())

# convert the object into a dict
file_properties_dict = file_properties_instance.to_dict()
# create an instance of FileProperties from a dict
file_properties_from_dict = FileProperties.from_dict(file_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


