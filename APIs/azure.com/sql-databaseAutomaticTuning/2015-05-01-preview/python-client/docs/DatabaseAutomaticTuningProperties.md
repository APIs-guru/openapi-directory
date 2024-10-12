# DatabaseAutomaticTuningProperties

Database-level Automatic Tuning properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_state** | **str** | Automatic tuning actual state. | [optional] [readonly] 
**desired_state** | **str** | Automatic tuning desired state. | [optional] 
**options** | [**Dict[str, AutomaticTuningOptions]**](AutomaticTuningOptions.md) | Automatic tuning options definition. | [optional] 

## Example

```python
from openapi_client.models.database_automatic_tuning_properties import DatabaseAutomaticTuningProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAutomaticTuningProperties from a JSON string
database_automatic_tuning_properties_instance = DatabaseAutomaticTuningProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseAutomaticTuningProperties.to_json())

# convert the object into a dict
database_automatic_tuning_properties_dict = database_automatic_tuning_properties_instance.to_dict()
# create an instance of DatabaseAutomaticTuningProperties from a dict
database_automatic_tuning_properties_from_dict = DatabaseAutomaticTuningProperties.from_dict(database_automatic_tuning_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


