# PlannedFailoverInput

Input definition for planned failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PlannedFailoverInputProperties**](PlannedFailoverInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.planned_failover_input import PlannedFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of PlannedFailoverInput from a JSON string
planned_failover_input_instance = PlannedFailoverInput.from_json(json)
# print the JSON string representation of the object
print(PlannedFailoverInput.to_json())

# convert the object into a dict
planned_failover_input_dict = planned_failover_input_instance.to_dict()
# create an instance of PlannedFailoverInput from a dict
planned_failover_input_from_dict = PlannedFailoverInput.from_dict(planned_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


