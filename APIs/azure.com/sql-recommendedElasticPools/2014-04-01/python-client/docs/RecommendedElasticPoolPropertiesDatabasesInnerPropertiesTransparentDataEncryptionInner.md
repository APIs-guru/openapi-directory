# RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner

Represents a database transparent data encryption configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInnerProperties**](RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.recommended_elastic_pool_properties_databases_inner_properties_transparent_data_encryption_inner import RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner from a JSON string
recommended_elastic_pool_properties_databases_inner_properties_transparent_data_encryption_inner_instance = RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner.to_json())

# convert the object into a dict
recommended_elastic_pool_properties_databases_inner_properties_transparent_data_encryption_inner_dict = recommended_elastic_pool_properties_databases_inner_properties_transparent_data_encryption_inner_instance.to_dict()
# create an instance of RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner from a dict
recommended_elastic_pool_properties_databases_inner_properties_transparent_data_encryption_inner_from_dict = RecommendedElasticPoolPropertiesDatabasesInnerPropertiesTransparentDataEncryptionInner.from_dict(recommended_elastic_pool_properties_databases_inner_properties_transparent_data_encryption_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


