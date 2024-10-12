# DocumentOccurrence

DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard | [optional] 
**creator_comment** | **str** | A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields | [optional] 
**creators** | **List[str]** | Identify who (or what, in the case of a tool) created the SPDX file. If the SPDX file was created by an individual, indicate the person&#39;s name | [optional] 
**document_comment** | **str** | A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document | [optional] 
**external_document_refs** | **List[str]** | Identify any external SPDX documents referenced within this SPDX document | [optional] 
**id** | **str** | Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally | [optional] 
**license_list_version** | **str** | A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created | [optional] 
**namespace** | **str** | Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter | [optional] 
**title** | **str** | Identify name of this document as designated by creator | [optional] 

## Example

```python
from openapi_client.models.document_occurrence import DocumentOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentOccurrence from a JSON string
document_occurrence_instance = DocumentOccurrence.from_json(json)
# print the JSON string representation of the object
print(DocumentOccurrence.to_json())

# convert the object into a dict
document_occurrence_dict = document_occurrence_instance.to_dict()
# create an instance of DocumentOccurrence from a dict
document_occurrence_from_dict = DocumentOccurrence.from_dict(document_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


