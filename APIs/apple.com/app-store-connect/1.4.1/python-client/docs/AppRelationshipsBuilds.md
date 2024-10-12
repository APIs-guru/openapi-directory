# AppRelationshipsBuilds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBuildsDataInner]**](AppRelationshipsBuildsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_builds import AppRelationshipsBuilds

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsBuilds from a JSON string
app_relationships_builds_instance = AppRelationshipsBuilds.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsBuilds.to_json())

# convert the object into a dict
app_relationships_builds_dict = app_relationships_builds_instance.to_dict()
# create an instance of AppRelationshipsBuilds from a dict
app_relationships_builds_from_dict = AppRelationshipsBuilds.from_dict(app_relationships_builds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


