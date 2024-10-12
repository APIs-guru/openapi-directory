# DatabaseAssessmentDetails

Assessment properties that can be shared by various publishers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_id** | **str** | Gets or sets the database assessment scope/Id. | [optional] 
**assessment_target_type** | **str** | Gets or sets the assessed target database type. | [optional] 
**breaking_changes_count** | **int** | Gets or sets the number of breaking changes found. | [optional] 
**compatibility_level** | **str** | Gets or sets the compatibility level of the database. | [optional] 
**database_name** | **str** | Gets or sets the database name. | [optional] 
**database_size_in_mb** | **str** | Gets or sets the database size. | [optional] 
**enqueue_time** | **str** | Gets or sets the time the message was enqueued. | [optional] 
**extended_info** | **Dict[str, str]** | Gets or sets the extended properties of the database. | [optional] 
**instance_id** | **str** | Gets or sets the database server instance Id. | [optional] 
**is_ready_for_migration** | **bool** | Gets or sets a value indicating whether the database is ready for migration. | [optional] 
**last_assessed_time** | **datetime** | Gets or sets the time when the database was last assessed. | [optional] 
**last_updated_time** | **datetime** | Gets or sets the time of the last modification of the database details. | [optional] 
**migration_blockers_count** | **int** | Gets or sets the number of blocking changes found. | [optional] 
**solution_name** | **str** | Gets or sets the name of the solution that sent the data. | [optional] 

## Example

```python
from openapi_client.models.database_assessment_details import DatabaseAssessmentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAssessmentDetails from a JSON string
database_assessment_details_instance = DatabaseAssessmentDetails.from_json(json)
# print the JSON string representation of the object
print(DatabaseAssessmentDetails.to_json())

# convert the object into a dict
database_assessment_details_dict = database_assessment_details_instance.to_dict()
# create an instance of DatabaseAssessmentDetails from a dict
database_assessment_details_from_dict = DatabaseAssessmentDetails.from_dict(database_assessment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


