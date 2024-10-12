# MapWithRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**MapCounts**](MapCounts.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**map_settings** | [**MapSettings**](MapSettings.md) |  | [optional] 
**owner_id** | **int** |  | [optional] 
**picture_url** | **str** |  | [optional] 
**relation** | [**MapRelation**](MapRelation.md) |  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**visibility** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.map_with_relation import MapWithRelation

# TODO update the JSON string below
json = "{}"
# create an instance of MapWithRelation from a JSON string
map_with_relation_instance = MapWithRelation.from_json(json)
# print the JSON string representation of the object
print(MapWithRelation.to_json())

# convert the object into a dict
map_with_relation_dict = map_with_relation_instance.to_dict()
# create an instance of MapWithRelation from a dict
map_with_relation_from_dict = MapWithRelation.from_dict(map_with_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


