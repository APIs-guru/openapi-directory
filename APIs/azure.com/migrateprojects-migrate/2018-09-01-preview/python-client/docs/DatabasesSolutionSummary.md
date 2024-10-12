# DatabasesSolutionSummary

Class representing the databases solution summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_instances_assessed_count** | **int** | Gets or sets the count of database instances assessed. | [optional] 
**databases_assessed_count** | **int** | Gets or sets the count of databases assessed. | [optional] 
**migration_ready_count** | **int** | Gets or sets the count of databases ready for migration. | [optional] 

## Example

```python
from openapi_client.models.databases_solution_summary import DatabasesSolutionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasesSolutionSummary from a JSON string
databases_solution_summary_instance = DatabasesSolutionSummary.from_json(json)
# print the JSON string representation of the object
print(DatabasesSolutionSummary.to_json())

# convert the object into a dict
databases_solution_summary_dict = databases_solution_summary_instance.to_dict()
# create an instance of DatabasesSolutionSummary from a dict
databases_solution_summary_from_dict = DatabasesSolutionSummary.from_dict(databases_solution_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


