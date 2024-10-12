# RecommendedElasticPoolPropertiesDatabasesInner

Represents a database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of database.  This is metadata used for the Azure portal experience. | [optional] [readonly] 
**properties** | [**RecommendedElasticPoolPropertiesDatabasesInnerProperties**](RecommendedElasticPoolPropertiesDatabasesInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.recommended_elastic_pool_properties_databases_inner import RecommendedElasticPoolPropertiesDatabasesInner

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolPropertiesDatabasesInner from a JSON string
recommended_elastic_pool_properties_databases_inner_instance = RecommendedElasticPoolPropertiesDatabasesInner.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolPropertiesDatabasesInner.to_json())

# convert the object into a dict
recommended_elastic_pool_properties_databases_inner_dict = recommended_elastic_pool_properties_databases_inner_instance.to_dict()
# create an instance of RecommendedElasticPoolPropertiesDatabasesInner from a dict
recommended_elastic_pool_properties_databases_inner_from_dict = RecommendedElasticPoolPropertiesDatabasesInner.from_dict(recommended_elastic_pool_properties_databases_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


