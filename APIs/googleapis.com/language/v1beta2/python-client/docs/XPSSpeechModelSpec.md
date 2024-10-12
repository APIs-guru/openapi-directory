# XPSSpeechModelSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required for speech xps backend. Speech xps has to use dataset_id and model_id as the primary key in db so that speech API can query the db directly. | [optional] 
**language** | **str** |  | [optional] 
**sub_model_specs** | [**List[XPSSpeechModelSpecSubModelSpec]**](XPSSpeechModelSpecSubModelSpec.md) | Model specs for all submodels contained in this model. | [optional] 

## Example

```python
from openapi_client.models.xps_speech_model_spec import XPSSpeechModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSSpeechModelSpec from a JSON string
xps_speech_model_spec_instance = XPSSpeechModelSpec.from_json(json)
# print the JSON string representation of the object
print(XPSSpeechModelSpec.to_json())

# convert the object into a dict
xps_speech_model_spec_dict = xps_speech_model_spec_instance.to_dict()
# create an instance of XPSSpeechModelSpec from a dict
xps_speech_model_spec_from_dict = XPSSpeechModelSpec.from_dict(xps_speech_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


