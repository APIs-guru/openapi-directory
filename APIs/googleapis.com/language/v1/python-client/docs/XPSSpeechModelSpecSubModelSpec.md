# XPSSpeechModelSpecSubModelSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**biasing_model_type** | **str** | Type of the biasing model. | [optional] 
**client_id** | **str** | In S3, Recognition ClientContextId.client_id | [optional] 
**context_id** | **str** | In S3, Recognition ClientContextId.context_id | [optional] 
**is_enhanced_model** | **bool** | If true then it means we have an enhanced version of the biasing models. | [optional] 

## Example

```python
from openapi_client.models.xps_speech_model_spec_sub_model_spec import XPSSpeechModelSpecSubModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSSpeechModelSpecSubModelSpec from a JSON string
xps_speech_model_spec_sub_model_spec_instance = XPSSpeechModelSpecSubModelSpec.from_json(json)
# print the JSON string representation of the object
print(XPSSpeechModelSpecSubModelSpec.to_json())

# convert the object into a dict
xps_speech_model_spec_sub_model_spec_dict = xps_speech_model_spec_sub_model_spec_instance.to_dict()
# create an instance of XPSSpeechModelSpecSubModelSpec from a dict
xps_speech_model_spec_sub_model_spec_from_dict = XPSSpeechModelSpecSubModelSpec.from_dict(xps_speech_model_spec_sub_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


