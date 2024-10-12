# Page

Detected page from OCR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocks** | [**List[Block]**](Block.md) | List of blocks of text, images etc on this page. | [optional] 
**confidence** | **float** | Confidence of the OCR results on the page. Range [0, 1]. | [optional] 
**height** | **int** | Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. | [optional] 
**var_property** | [**TextProperty**](TextProperty.md) |  | [optional] 
**width** | **int** | Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. | [optional] 

## Example

```python
from openapi_client.models.page import Page

# TODO update the JSON string below
json = "{}"
# create an instance of Page from a JSON string
page_instance = Page.from_json(json)
# print the JSON string representation of the object
print(Page.to_json())

# convert the object into a dict
page_dict = page_instance.to_dict()
# create an instance of Page from a dict
page_from_dict = Page.from_dict(page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


