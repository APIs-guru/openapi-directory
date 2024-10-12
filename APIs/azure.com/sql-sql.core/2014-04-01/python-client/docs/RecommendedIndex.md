# RecommendedIndex

Represents a database recommended index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecommendedIndexProperties**](RecommendedIndexProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_index import RecommendedIndex

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedIndex from a JSON string
recommended_index_instance = RecommendedIndex.from_json(json)
# print the JSON string representation of the object
print(RecommendedIndex.to_json())

# convert the object into a dict
recommended_index_dict = recommended_index_instance.to_dict()
# create an instance of RecommendedIndex from a dict
recommended_index_from_dict = RecommendedIndex.from_dict(recommended_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


