# DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner

The impact of an operation, both in absolute and relative terms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_value_absolute** | **float** | The absolute impact to dimension. | [optional] [readonly] 
**change_value_relative** | **float** | The relative impact to dimension (null if not applicable) | [optional] [readonly] 
**name** | **str** | The name of the impact dimension. | [optional] [readonly] 
**unit** | **str** | The unit in which estimated impact to dimension is measured. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_properties_recommended_index_inner_properties_estimated_impact_inner import DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner from a JSON string
database_properties_recommended_index_inner_properties_estimated_impact_inner_instance = DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.to_json())

# convert the object into a dict
database_properties_recommended_index_inner_properties_estimated_impact_inner_dict = database_properties_recommended_index_inner_properties_estimated_impact_inner_instance.to_dict()
# create an instance of DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner from a dict
database_properties_recommended_index_inner_properties_estimated_impact_inner_from_dict = DatabasePropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.from_dict(database_properties_recommended_index_inner_properties_estimated_impact_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


