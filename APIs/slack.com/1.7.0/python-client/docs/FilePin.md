# FilePin


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** |  | [optional] 
**created_by** | **str** |  | [optional] 
**file** | [**ObjsFile**](ObjsFile.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.file_pin import FilePin

# TODO update the JSON string below
json = "{}"
# create an instance of FilePin from a JSON string
file_pin_instance = FilePin.from_json(json)
# print the JSON string representation of the object
print(FilePin.to_json())

# convert the object into a dict
file_pin_dict = file_pin_instance.to_dict()
# create an instance of FilePin from a dict
file_pin_from_dict = FilePin.from_dict(file_pin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


