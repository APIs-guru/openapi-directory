# DatabaseInstanceSummary

Class representing the database instance summary object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databases_assessed_count** | **int** | Gets or sets the count of databases assessed. | [optional] 
**migration_ready_count** | **int** | Gets or sets the count of databases ready for migration. | [optional] 

## Example

```python
from openapi_client.models.database_instance_summary import DatabaseInstanceSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstanceSummary from a JSON string
database_instance_summary_instance = DatabaseInstanceSummary.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstanceSummary.to_json())

# convert the object into a dict
database_instance_summary_dict = database_instance_summary_instance.to_dict()
# create an instance of DatabaseInstanceSummary from a dict
database_instance_summary_from_dict = DatabaseInstanceSummary.from_dict(database_instance_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


