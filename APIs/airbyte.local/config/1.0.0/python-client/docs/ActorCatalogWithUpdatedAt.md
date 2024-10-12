# ActorCatalogWithUpdatedAt

A source actor catalog with the timestamp it was mostly recently updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog** | **object** |  | [optional] 
**updated_at** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.actor_catalog_with_updated_at import ActorCatalogWithUpdatedAt

# TODO update the JSON string below
json = "{}"
# create an instance of ActorCatalogWithUpdatedAt from a JSON string
actor_catalog_with_updated_at_instance = ActorCatalogWithUpdatedAt.from_json(json)
# print the JSON string representation of the object
print(ActorCatalogWithUpdatedAt.to_json())

# convert the object into a dict
actor_catalog_with_updated_at_dict = actor_catalog_with_updated_at_instance.to_dict()
# create an instance of ActorCatalogWithUpdatedAt from a dict
actor_catalog_with_updated_at_from_dict = ActorCatalogWithUpdatedAt.from_dict(actor_catalog_with_updated_at_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


