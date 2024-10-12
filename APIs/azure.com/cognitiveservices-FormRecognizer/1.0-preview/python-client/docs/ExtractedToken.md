# ExtractedToken

Canonical representation of single extracted text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **List[float]** | Bounding box of the extracted text. Represents the  location of the extracted text as a pair of  cartesian co-ordinates. The co-ordinate pairs are arranged by  top-left, top-right, bottom-right and bottom-left endpoints box  with origin reference from the bottom-left of the page. | [optional] 
**confidence** | **float** | A measure of accuracy of the extracted text. | [optional] 
**text** | **str** | String value of the extracted text. | [optional] 

## Example

```python
from openapi_client.models.extracted_token import ExtractedToken

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractedToken from a JSON string
extracted_token_instance = ExtractedToken.from_json(json)
# print the JSON string representation of the object
print(ExtractedToken.to_json())

# convert the object into a dict
extracted_token_dict = extracted_token_instance.to_dict()
# create an instance of ExtractedToken from a dict
extracted_token_from_dict = ExtractedToken.from_dict(extracted_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


