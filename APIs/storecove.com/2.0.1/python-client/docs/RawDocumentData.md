# RawDocumentData

A document to send, in base64 encoded format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The base64 encoded version of the document. | 
**document_type_id** | **str** | The document type id of the document. Required when parse &#x3D;&#x3D; false. | [optional] 
**parse** | **bool** | *** NOTE: only parse &#x3D;&#x3D; true is currently supported *** *** NOTE: parsing is only supported for documentType &#x3D;&#x3D; &#39;invoice&#39; *** Whether or not to parse the document. If true, the data will be extracted from the document and used to construct a new document. If false, the document will be sent as is. In this case, you must ensure the document validates without any errors against the relevant validation artifacts for that processId/documentTypeId. We automatically apply updates of the validation artificats, respecting the grace period provided by the issuer. During that period, documents that validate against either the old as well as against the new artifacts are accepted. After the grace period, your document must validate against the new artifacts. You are also responsible for making sure your receiver is able to receive the updated document. | [optional] [default to True]
**parse_strategy** | **str** | How to parse the document. Only needed when parse &#x3D;&#x3D; true. | [optional] 
**process_id** | **str** | The process id of the document. Required when parse &#x3D;&#x3D; false. | [optional] 

## Example

```python
from openapi_client.models.raw_document_data import RawDocumentData

# TODO update the JSON string below
json = "{}"
# create an instance of RawDocumentData from a JSON string
raw_document_data_instance = RawDocumentData.from_json(json)
# print the JSON string representation of the object
print(RawDocumentData.to_json())

# convert the object into a dict
raw_document_data_dict = raw_document_data_instance.to_dict()
# create an instance of RawDocumentData from a dict
raw_document_data_from_dict = RawDocumentData.from_dict(raw_document_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


