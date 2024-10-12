# WriteFile

Represents the write file operation (for files added or modified).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The file&#39;s contents. | [optional] 

## Example

```python
from openapi_client.models.write_file import WriteFile

# TODO update the JSON string below
json = "{}"
# create an instance of WriteFile from a JSON string
write_file_instance = WriteFile.from_json(json)
# print the JSON string representation of the object
print(WriteFile.to_json())

# convert the object into a dict
write_file_dict = write_file_instance.to_dict()
# create an instance of WriteFile from a dict
write_file_from_dict = WriteFile.from_dict(write_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


