# PassportFile

This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_date** | **int** | Unix time when the file was uploaded | 
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_size** | **int** | File size | 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 

## Example

```python
from openapi_client.models.passport_file import PassportFile

# TODO update the JSON string below
json = "{}"
# create an instance of PassportFile from a JSON string
passport_file_instance = PassportFile.from_json(json)
# print the JSON string representation of the object
print(PassportFile.to_json())

# convert the object into a dict
passport_file_dict = passport_file_instance.to_dict()
# create an instance of PassportFile from a dict
passport_file_from_dict = PassportFile.from_dict(passport_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


