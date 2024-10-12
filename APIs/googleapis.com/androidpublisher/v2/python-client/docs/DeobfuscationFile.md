# DeobfuscationFile

Represents a deobfuscation file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol_type** | **str** | The type of the deobfuscation file. | [optional] 

## Example

```python
from openapi_client.models.deobfuscation_file import DeobfuscationFile

# TODO update the JSON string below
json = "{}"
# create an instance of DeobfuscationFile from a JSON string
deobfuscation_file_instance = DeobfuscationFile.from_json(json)
# print the JSON string representation of the object
print(DeobfuscationFile.to_json())

# convert the object into a dict
deobfuscation_file_dict = deobfuscation_file_instance.to_dict()
# create an instance of DeobfuscationFile from a dict
deobfuscation_file_from_dict = DeobfuscationFile.from_dict(deobfuscation_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


