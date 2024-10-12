# AppRelationshipsAppInfos


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsAppInfosDataInner]**](AppRelationshipsAppInfosDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_app_infos import AppRelationshipsAppInfos

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsAppInfos from a JSON string
app_relationships_app_infos_instance = AppRelationshipsAppInfos.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsAppInfos.to_json())

# convert the object into a dict
app_relationships_app_infos_dict = app_relationships_app_infos_instance.to_dict()
# create an instance of AppRelationshipsAppInfos from a dict
app_relationships_app_infos_from_dict = AppRelationshipsAppInfos.from_dict(app_relationships_app_infos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


