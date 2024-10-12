# Traces

List of new or updated traces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**traces** | [**List[Trace]**](Trace.md) | List of traces. | [optional] 

## Example

```python
from openapi_client.models.traces import Traces

# TODO update the JSON string below
json = "{}"
# create an instance of Traces from a JSON string
traces_instance = Traces.from_json(json)
# print the JSON string representation of the object
print(Traces.to_json())

# convert the object into a dict
traces_dict = traces_instance.to_dict()
# create an instance of Traces from a dict
traces_from_dict = Traces.from_dict(traces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


