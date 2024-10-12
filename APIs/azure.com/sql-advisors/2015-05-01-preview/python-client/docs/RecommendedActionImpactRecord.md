# RecommendedActionImpactRecord

Contains information of estimated or observed impact on various metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute_value** | **float** | Gets the absolute value of this dimension if applicable. e.g., Number of Queries affected | [optional] [readonly] 
**change_value_absolute** | **float** | Gets the absolute change in the value of this dimension. e.g., Absolute Disk space change in Megabytes | [optional] [readonly] 
**change_value_relative** | **float** | Gets the relative change in the value of this dimension. e.g., Relative Disk space change in Percentage | [optional] [readonly] 
**dimension_name** | **str** | Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected. | [optional] [readonly] 
**unit** | **str** | Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_action_impact_record import RecommendedActionImpactRecord

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionImpactRecord from a JSON string
recommended_action_impact_record_instance = RecommendedActionImpactRecord.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionImpactRecord.to_json())

# convert the object into a dict
recommended_action_impact_record_dict = recommended_action_impact_record_instance.to_dict()
# create an instance of RecommendedActionImpactRecord from a dict
recommended_action_impact_record_from_dict = RecommendedActionImpactRecord.from_dict(recommended_action_impact_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


