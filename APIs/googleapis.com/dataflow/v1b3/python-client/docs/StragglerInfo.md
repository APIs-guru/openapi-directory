# StragglerInfo

Information useful for straggler identification and debugging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**causes** | [**Dict[str, StragglerDebuggingInfo]**](StragglerDebuggingInfo.md) | The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause. | [optional] 
**start_time** | **str** | The time when the work item attempt became a straggler. | [optional] 

## Example

```python
from openapi_client.models.straggler_info import StragglerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StragglerInfo from a JSON string
straggler_info_instance = StragglerInfo.from_json(json)
# print the JSON string representation of the object
print(StragglerInfo.to_json())

# convert the object into a dict
straggler_info_dict = straggler_info_instance.to_dict()
# create an instance of StragglerInfo from a dict
straggler_info_from_dict = StragglerInfo.from_dict(straggler_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


