# FileDTO

DTO to hold details of uploaded files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | File name. Supported file types are \&quot;.tsv\&quot;, \&quot;.pdf\&quot;, \&quot;.txt\&quot;, \&quot;.docx\&quot;, \&quot;.xlsx\&quot;. | 
**file_uri** | **str** | Public URI of the file. | 

## Example

```python
from openapi_client.models.file_dto import FileDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FileDTO from a JSON string
file_dto_instance = FileDTO.from_json(json)
# print the JSON string representation of the object
print(FileDTO.to_json())

# convert the object into a dict
file_dto_dict = file_dto_instance.to_dict()
# create an instance of FileDTO from a dict
file_dto_from_dict = FileDTO.from_dict(file_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


