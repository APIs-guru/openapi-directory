# PrereleaseVersionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**builds** | [**AppRelationshipsBuilds**](AppRelationshipsBuilds.md) |  | [optional] 

## Example

```python
from openapi_client.models.prerelease_version_relationships import PrereleaseVersionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PrereleaseVersionRelationships from a JSON string
prerelease_version_relationships_instance = PrereleaseVersionRelationships.from_json(json)
# print the JSON string representation of the object
print(PrereleaseVersionRelationships.to_json())

# convert the object into a dict
prerelease_version_relationships_dict = prerelease_version_relationships_instance.to_dict()
# create an instance of PrereleaseVersionRelationships from a dict
prerelease_version_relationships_from_dict = PrereleaseVersionRelationships.from_dict(prerelease_version_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


