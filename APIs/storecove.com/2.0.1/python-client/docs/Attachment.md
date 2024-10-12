# Attachment

A document attachment to the invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description for the file attachment. | [optional] 
**document** | **str** | The base64 encoded version of the document attachment. | 
**document_id** | **str** | An id for the file attachment. | [optional] 
**filename** | **str** | The name of the file attachment. | [optional] 
**mime_type** | **str** | The document attachment mime type. Currently only application/pdf is allowed. | 
**primary_image** | **bool** | Whether or not this document is a visual representation of the invoice data. Note that although this property is not yet deprecated, using value &#39;true&#39; is discouraged, since the invoice data itself is leading, not the image, and including an image may lead to confusion. Peppol no longer allows including primary images. | [optional] [default to False]

## Example

```python
from openapi_client.models.attachment import Attachment

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment from a JSON string
attachment_instance = Attachment.from_json(json)
# print the JSON string representation of the object
print(Attachment.to_json())

# convert the object into a dict
attachment_dict = attachment_instance.to_dict()
# create an instance of Attachment from a dict
attachment_from_dict = Attachment.from_dict(attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


