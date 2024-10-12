# ResponseForTheTextCorrection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corrected** | **bool** |  | [optional] 
**corrected_text** | **str** | Corrected text of the document | 
**diacritized** | **bool** |  | [optional] 
**id** | **str** | Unique identifier of the document | [optional] 
**language** | **str** | The used language of the document | 
**text** | **str** | The raw text of the document which has been analysed | [optional] 

## Example

```python
from openapi_client.models.response_for_the_text_correction import ResponseForTheTextCorrection

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseForTheTextCorrection from a JSON string
response_for_the_text_correction_instance = ResponseForTheTextCorrection.from_json(json)
# print the JSON string representation of the object
print(ResponseForTheTextCorrection.to_json())

# convert the object into a dict
response_for_the_text_correction_dict = response_for_the_text_correction_instance.to_dict()
# create an instance of ResponseForTheTextCorrection from a dict
response_for_the_text_correction_from_dict = ResponseForTheTextCorrection.from_dict(response_for_the_text_correction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


