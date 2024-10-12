# FileAs

The name that should be used to sort the person in a list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The file-as value | [optional] 

## Example

```python
from openapi_client.models.file_as import FileAs

# TODO update the JSON string below
json = "{}"
# create an instance of FileAs from a JSON string
file_as_instance = FileAs.from_json(json)
# print the JSON string representation of the object
print(FileAs.to_json())

# convert the object into a dict
file_as_dict = file_as_instance.to_dict()
# create an instance of FileAs from a dict
file_as_from_dict = FileAs.from_dict(file_as_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


