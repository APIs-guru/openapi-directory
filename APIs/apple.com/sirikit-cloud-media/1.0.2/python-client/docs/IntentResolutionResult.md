# IntentResolutionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | 
**needs_value** | **object** |  | [optional] 
**not_required** | **object** |  | [optional] 
**unsupported** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.intent_resolution_result import IntentResolutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of IntentResolutionResult from a JSON string
intent_resolution_result_instance = IntentResolutionResult.from_json(json)
# print the JSON string representation of the object
print(IntentResolutionResult.to_json())

# convert the object into a dict
intent_resolution_result_dict = intent_resolution_result_instance.to_dict()
# create an instance of IntentResolutionResult from a dict
intent_resolution_result_from_dict = IntentResolutionResult.from_dict(intent_resolution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


