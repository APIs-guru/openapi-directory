# BuildRelationshipsPreReleaseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsPreReleaseVersionsDataInner**](AppRelationshipsPreReleaseVersionsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_relationships_pre_release_version import BuildRelationshipsPreReleaseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of BuildRelationshipsPreReleaseVersion from a JSON string
build_relationships_pre_release_version_instance = BuildRelationshipsPreReleaseVersion.from_json(json)
# print the JSON string representation of the object
print(BuildRelationshipsPreReleaseVersion.to_json())

# convert the object into a dict
build_relationships_pre_release_version_dict = build_relationships_pre_release_version_instance.to_dict()
# create an instance of BuildRelationshipsPreReleaseVersion from a dict
build_relationships_pre_release_version_from_dict = BuildRelationshipsPreReleaseVersion.from_dict(build_relationships_pre_release_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


