# FoTransformRequestDto

The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fo_document_base64_string** | **str** | This is the complete XSL-FO document provided using Base64 encoding. | [optional] 
**metadata** | [**PdfMetadataDto**](PdfMetadataDto.md) |  | [optional] 
**resources** | **Dict[str, Optional[str]]** | This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string. | [optional] 
**xml_data_document_base64_string** | **str** | This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding. | [optional] 

## Example

```python
from openapi_client.models.fo_transform_request_dto import FoTransformRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of FoTransformRequestDto from a JSON string
fo_transform_request_dto_instance = FoTransformRequestDto.from_json(json)
# print the JSON string representation of the object
print(FoTransformRequestDto.to_json())

# convert the object into a dict
fo_transform_request_dto_dict = fo_transform_request_dto_instance.to_dict()
# create an instance of FoTransformRequestDto from a dict
fo_transform_request_dto_from_dict = FoTransformRequestDto.from_dict(fo_transform_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


