# Respot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**map** | [**Map**](Map.md) |  | [optional] 
**map_id** | **int** |  | [optional] 
**spot** | [**Spot**](Spot.md) |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.respot import Respot

# TODO update the JSON string below
json = "{}"
# create an instance of Respot from a JSON string
respot_instance = Respot.from_json(json)
# print the JSON string representation of the object
print(Respot.to_json())

# convert the object into a dict
respot_dict = respot_instance.to_dict()
# create an instance of Respot from a dict
respot_from_dict = Respot.from_dict(respot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


