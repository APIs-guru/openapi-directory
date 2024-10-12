# FunctionEnvelopeCollection

Collection of Kudu function information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[FunctionEnvelope]**](FunctionEnvelope.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.function_envelope_collection import FunctionEnvelopeCollection

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionEnvelopeCollection from a JSON string
function_envelope_collection_instance = FunctionEnvelopeCollection.from_json(json)
# print the JSON string representation of the object
print(FunctionEnvelopeCollection.to_json())

# convert the object into a dict
function_envelope_collection_dict = function_envelope_collection_instance.to_dict()
# create an instance of FunctionEnvelopeCollection from a dict
function_envelope_collection_from_dict = FunctionEnvelopeCollection.from_dict(function_envelope_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


