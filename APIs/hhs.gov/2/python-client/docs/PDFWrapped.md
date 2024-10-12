# PDFWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[PDF]**](PDF.md) |  | [optional] 

## Example

```python
from openapi_client.models.pdf_wrapped import PDFWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of PDFWrapped from a JSON string
pdf_wrapped_instance = PDFWrapped.from_json(json)
# print the JSON string representation of the object
print(PDFWrapped.to_json())

# convert the object into a dict
pdf_wrapped_dict = pdf_wrapped_instance.to_dict()
# create an instance of PDFWrapped from a dict
pdf_wrapped_from_dict = PDFWrapped.from_dict(pdf_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


