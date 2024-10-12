# Chaos

Contains a description of Chaos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_parameters** | [**ChaosParameters**](ChaosParameters.md) |  | [optional] 
**schedule_status** | [**ChaosScheduleStatus**](ChaosScheduleStatus.md) |  | [optional] 
**status** | [**ChaosStatus**](ChaosStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.chaos import Chaos

# TODO update the JSON string below
json = "{}"
# create an instance of Chaos from a JSON string
chaos_instance = Chaos.from_json(json)
# print the JSON string representation of the object
print(Chaos.to_json())

# convert the object into a dict
chaos_dict = chaos_instance.to_dict()
# create an instance of Chaos from a dict
chaos_from_dict = Chaos.from_dict(chaos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


