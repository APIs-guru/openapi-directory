# AppRelationshipsAvailableTerritories


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsAvailableTerritoriesDataInner]**](AppRelationshipsAvailableTerritoriesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_available_territories import AppRelationshipsAvailableTerritories

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsAvailableTerritories from a JSON string
app_relationships_available_territories_instance = AppRelationshipsAvailableTerritories.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsAvailableTerritories.to_json())

# convert the object into a dict
app_relationships_available_territories_dict = app_relationships_available_territories_instance.to_dict()
# create an instance of AppRelationshipsAvailableTerritories from a dict
app_relationships_available_territories_from_dict = AppRelationshipsAvailableTerritories.from_dict(app_relationships_available_territories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


