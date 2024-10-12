# DocumentNote

DocumentNote represents an SPDX Document Creation Infromation section: https://spdx.github.io/spdx-spec/2-document-creation-information/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_licence** | **str** | Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields (\&quot;SPDX-Metadata\&quot;) | [optional] 
**spdx_version** | **str** | Provide a reference number that can be used to understand how to parse and interpret the rest of the file | [optional] 

## Example

```python
from openapi_client.models.document_note import DocumentNote

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentNote from a JSON string
document_note_instance = DocumentNote.from_json(json)
# print the JSON string representation of the object
print(DocumentNote.to_json())

# convert the object into a dict
document_note_dict = document_note_instance.to_dict()
# create an instance of DocumentNote from a dict
document_note_from_dict = DocumentNote.from_dict(document_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


