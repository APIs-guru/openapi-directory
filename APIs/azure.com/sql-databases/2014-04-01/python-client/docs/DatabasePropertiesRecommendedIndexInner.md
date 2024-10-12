# DatabasePropertiesRecommendedIndexInner

Represents a database recommended index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabasePropertiesRecommendedIndexInnerProperties**](DatabasePropertiesRecommendedIndexInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.database_properties_recommended_index_inner import DatabasePropertiesRecommendedIndexInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesRecommendedIndexInner from a JSON string
database_properties_recommended_index_inner_instance = DatabasePropertiesRecommendedIndexInner.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesRecommendedIndexInner.to_json())

# convert the object into a dict
database_properties_recommended_index_inner_dict = database_properties_recommended_index_inner_instance.to_dict()
# create an instance of DatabasePropertiesRecommendedIndexInner from a dict
database_properties_recommended_index_inner_from_dict = DatabasePropertiesRecommendedIndexInner.from_dict(database_properties_recommended_index_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


