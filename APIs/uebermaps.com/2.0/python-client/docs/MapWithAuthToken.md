# MapWithAuthToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**MapCounts**](MapCounts.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**owner_id** | **int** |  | [optional] 
**picture_url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**visibility** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.map_with_auth_token import MapWithAuthToken

# TODO update the JSON string below
json = "{}"
# create an instance of MapWithAuthToken from a JSON string
map_with_auth_token_instance = MapWithAuthToken.from_json(json)
# print the JSON string representation of the object
print(MapWithAuthToken.to_json())

# convert the object into a dict
map_with_auth_token_dict = map_with_auth_token_instance.to_dict()
# create an instance of MapWithAuthToken from a dict
map_with_auth_token_from_dict = MapWithAuthToken.from_dict(map_with_auth_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


