# DatabasePropertiesRecommendedIndexInnerProperties

Represents the properties of a database recommended index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance. | [optional] [readonly] 
**columns** | **List[str]** | Columns over which to build index | [optional] [readonly] 
**created** | **datetime** | The UTC datetime showing when this resource was created (ISO8601 format). | [optional] [readonly] 
**estimated_impact** | [**List[DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner]**](DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.md) | The estimated impact of doing recommended index action. | [optional] [readonly] 
**included_columns** | **List[str]** | The list of column names to be included in the index | [optional] [readonly] 
**index_script** | **str** | The full build index script | [optional] [readonly] 
**index_type** | **str** | The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE) | [optional] [readonly] 
**last_modified** | **datetime** | The UTC datetime of when was this resource last changed (ISO8601 format). | [optional] [readonly] 
**reported_impact** | [**List[DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner]**](DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.md) | The values reported after index action is complete. | [optional] [readonly] 
**var_schema** | **str** | The schema where table to build index over resides | [optional] [readonly] 
**state** | **str** | The current recommendation state. | [optional] [readonly] 
**table** | **str** | The table on which to build index. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_properties_recommended_index_inner_properties import DatabasePropertiesRecommendedIndexInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesRecommendedIndexInnerProperties from a JSON string
database_properties_recommended_index_inner_properties_instance = DatabasePropertiesRecommendedIndexInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesRecommendedIndexInnerProperties.to_json())

# convert the object into a dict
database_properties_recommended_index_inner_properties_dict = database_properties_recommended_index_inner_properties_instance.to_dict()
# create an instance of DatabasePropertiesRecommendedIndexInnerProperties from a dict
database_properties_recommended_index_inner_properties_from_dict = DatabasePropertiesRecommendedIndexInnerProperties.from_dict(database_properties_recommended_index_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


