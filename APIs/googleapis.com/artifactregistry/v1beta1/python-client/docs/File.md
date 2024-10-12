# File

Files store content that is potentially associated with Packages or Versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the File was created. | [optional] [readonly] 
**hashes** | [**List[Hash]**](Hash.md) | The hashes of the file content. | [optional] 
**name** | **str** | The name of the file, for example: \&quot;projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt\&quot;. If the file ID part contains slashes, they are escaped. | [optional] 
**owner** | **str** | The name of the Package or Version that owns this file, if any. | [optional] 
**size_bytes** | **str** | The size of the File in bytes. | [optional] 
**update_time** | **str** | Output only. The time when the File was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


