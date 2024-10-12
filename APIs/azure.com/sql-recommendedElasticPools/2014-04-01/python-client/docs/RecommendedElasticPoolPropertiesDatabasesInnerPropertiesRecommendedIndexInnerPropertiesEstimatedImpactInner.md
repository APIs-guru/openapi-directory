# RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner

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
from openapi_client.models.recommended_elastic_pool_properties_databases_inner_properties_recommended_index_inner_properties_estimated_impact_inner import RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner from a JSON string
recommended_elastic_pool_properties_databases_inner_properties_recommended_index_inner_properties_estimated_impact_inner_instance = RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.to_json())

# convert the object into a dict
recommended_elastic_pool_properties_databases_inner_properties_recommended_index_inner_properties_estimated_impact_inner_dict = recommended_elastic_pool_properties_databases_inner_properties_recommended_index_inner_properties_estimated_impact_inner_instance.to_dict()
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner from a dict
recommended_elastic_pool_properties_databases_inner_properties_recommended_index_inner_properties_estimated_impact_inner_from_dict = RecommendedElasticPoolPropertiesDatabasesInnerPropertiesRecommendedIndexInnerPropertiesEstimatedImpactInner.from_dict(recommended_elastic_pool_properties_databases_inner_properties_recommended_index_inner_properties_estimated_impact_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


