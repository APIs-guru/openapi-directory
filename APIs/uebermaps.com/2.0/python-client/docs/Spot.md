# Spot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**SpotCounts**](SpotCounts.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**lat** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**map_id** | **int** |  | [optional] 
**picture_url** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.spot import Spot

# TODO update the JSON string below
json = "{}"
# create an instance of Spot from a JSON string
spot_instance = Spot.from_json(json)
# print the JSON string representation of the object
print(Spot.to_json())

# convert the object into a dict
spot_dict = spot_instance.to_dict()
# create an instance of Spot from a dict
spot_from_dict = Spot.from_dict(spot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


