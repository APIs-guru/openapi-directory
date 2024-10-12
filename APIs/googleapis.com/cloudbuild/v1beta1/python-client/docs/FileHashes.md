# FileHashes

Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | [**List[Hash]**](Hash.md) | Collection of file hashes. | [optional] 

## Example

```python
from openapi_client.models.file_hashes import FileHashes

# TODO update the JSON string below
json = "{}"
# create an instance of FileHashes from a JSON string
file_hashes_instance = FileHashes.from_json(json)
# print the JSON string representation of the object
print(FileHashes.to_json())

# convert the object into a dict
file_hashes_dict = file_hashes_instance.to_dict()
# create an instance of FileHashes from a dict
file_hashes_from_dict = FileHashes.from_dict(file_hashes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


