# DatabaseAutomaticTuning

Database-level Automatic Tuning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabaseAutomaticTuningProperties**](DatabaseAutomaticTuningProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_automatic_tuning import DatabaseAutomaticTuning

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAutomaticTuning from a JSON string
database_automatic_tuning_instance = DatabaseAutomaticTuning.from_json(json)
# print the JSON string representation of the object
print(DatabaseAutomaticTuning.to_json())

# convert the object into a dict
database_automatic_tuning_dict = database_automatic_tuning_instance.to_dict()
# create an instance of DatabaseAutomaticTuning from a dict
database_automatic_tuning_from_dict = DatabaseAutomaticTuning.from_dict(database_automatic_tuning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


