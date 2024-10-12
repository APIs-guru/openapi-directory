# PdfMetadataDto

Enter meta data for pdf document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Pdf document author | [optional] 
**enable_add** | **bool** | Enables or disables adding or modifying text annotations and interactive  form fields. | [optional] 
**enable_copy** | **bool** | Enables or disables copying of text and graphics. | [optional] 
**enable_modify** | **bool** | Enables or disables modifying document contents (other than text annotations and   interactive form fields). | [optional] 
**enable_printing** | **bool** | Enables or disables printing. | [optional] 
**keywords** | **List[str]** | Pdf document keywords | [optional] 
**owner_password** | **str** | Specifies the owner password that will protect full access to any generated PDF documents. | [optional] 
**subject** | **str** | Pdf document subject | [optional] 
**title** | **str** | Pdf document title | [optional] 
**user_password** | **str** | Specifies the user password that will protect access to any generated PDF documents. | [optional] 

## Example

```python
from openapi_client.models.pdf_metadata_dto import PdfMetadataDto

# TODO update the JSON string below
json = "{}"
# create an instance of PdfMetadataDto from a JSON string
pdf_metadata_dto_instance = PdfMetadataDto.from_json(json)
# print the JSON string representation of the object
print(PdfMetadataDto.to_json())

# convert the object into a dict
pdf_metadata_dto_dict = pdf_metadata_dto_instance.to_dict()
# create an instance of PdfMetadataDto from a dict
pdf_metadata_dto_from_dict = PdfMetadataDto.from_dict(pdf_metadata_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


