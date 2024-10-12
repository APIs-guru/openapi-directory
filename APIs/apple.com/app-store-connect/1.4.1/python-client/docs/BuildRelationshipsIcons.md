# BuildRelationshipsIcons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BuildRelationshipsIconsDataInner]**](BuildRelationshipsIconsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_relationships_icons import BuildRelationshipsIcons

# TODO update the JSON string below
json = "{}"
# create an instance of BuildRelationshipsIcons from a JSON string
build_relationships_icons_instance = BuildRelationshipsIcons.from_json(json)
# print the JSON string representation of the object
print(BuildRelationshipsIcons.to_json())

# convert the object into a dict
build_relationships_icons_dict = build_relationships_icons_instance.to_dict()
# create an instance of BuildRelationshipsIcons from a dict
build_relationships_icons_from_dict = BuildRelationshipsIcons.from_dict(build_relationships_icons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


