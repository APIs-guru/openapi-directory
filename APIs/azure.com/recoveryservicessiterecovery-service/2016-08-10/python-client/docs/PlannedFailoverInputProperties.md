# PlannedFailoverInputProperties

Input definition for planned failover input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | Failover direction. | [optional] 
**provider_specific_details** | [**ProviderSpecificFailoverInput**](ProviderSpecificFailoverInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.planned_failover_input_properties import PlannedFailoverInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PlannedFailoverInputProperties from a JSON string
planned_failover_input_properties_instance = PlannedFailoverInputProperties.from_json(json)
# print the JSON string representation of the object
print(PlannedFailoverInputProperties.to_json())

# convert the object into a dict
planned_failover_input_properties_dict = planned_failover_input_properties_instance.to_dict()
# create an instance of PlannedFailoverInputProperties from a dict
planned_failover_input_properties_from_dict = PlannedFailoverInputProperties.from_dict(planned_failover_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


