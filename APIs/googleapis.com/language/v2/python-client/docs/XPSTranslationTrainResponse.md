# XPSTranslationTrainResponse

Train response for translation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_type** | **str** | Type of the model. | [optional] 

## Example

```python
from openapi_client.models.xps_translation_train_response import XPSTranslationTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTranslationTrainResponse from a JSON string
xps_translation_train_response_instance = XPSTranslationTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSTranslationTrainResponse.to_json())

# convert the object into a dict
xps_translation_train_response_dict = xps_translation_train_response_instance.to_dict()
# create an instance of XPSTranslationTrainResponse from a dict
xps_translation_train_response_from_dict = XPSTranslationTrainResponse.from_dict(xps_translation_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


