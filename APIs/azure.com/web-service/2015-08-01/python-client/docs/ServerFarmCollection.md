# ServerFarmCollection

Collection of serverfarms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[ServerFarmWithRichSku]**](ServerFarmWithRichSku.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.server_farm_collection import ServerFarmCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServerFarmCollection from a JSON string
server_farm_collection_instance = ServerFarmCollection.from_json(json)
# print the JSON string representation of the object
print(ServerFarmCollection.to_json())

# convert the object into a dict
server_farm_collection_dict = server_farm_collection_instance.to_dict()
# create an instance of ServerFarmCollection from a dict
server_farm_collection_from_dict = ServerFarmCollection.from_dict(server_farm_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


