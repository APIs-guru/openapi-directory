# OnCallInterval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | [**OnCallIntervalDuration**](OnCallIntervalDuration.md) |  | [optional] 
**escalation_policy** | [**EscalationPolicy**](EscalationPolicy.md) |  | [optional] 
**var_false** | **str** |  | [optional] 
**var_true** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.on_call_interval import OnCallInterval

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallInterval from a JSON string
on_call_interval_instance = OnCallInterval.from_json(json)
# print the JSON string representation of the object
print(OnCallInterval.to_json())

# convert the object into a dict
on_call_interval_dict = on_call_interval_instance.to_dict()
# create an instance of OnCallInterval from a dict
on_call_interval_from_dict = OnCallInterval.from_dict(on_call_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


