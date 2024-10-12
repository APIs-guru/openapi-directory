# OCR

Contains the text found in image for the language specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_id** | **str** | The cache id. | [optional] 
**candidates** | [**List[Candidate]**](Candidate.md) | The list of candidate text. | [optional] 
**language** | **str** | The ISO 639-3 code. | [optional] 
**metadata** | [**List[KeyValuePair]**](KeyValuePair.md) | Array of KeyValue. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**text** | **str** | The found text. | [optional] 
**tracking_id** | **str** | The tracking id. | [optional] 

## Example

```python
from openapi_client.models.ocr import OCR

# TODO update the JSON string below
json = "{}"
# create an instance of OCR from a JSON string
ocr_instance = OCR.from_json(json)
# print the JSON string representation of the object
print(OCR.to_json())

# convert the object into a dict
ocr_dict = ocr_instance.to_dict()
# create an instance of OCR from a dict
ocr_from_dict = OCR.from_dict(ocr_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


