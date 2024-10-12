# BundleIdRelationshipsProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BundleIdRelationshipsProfilesDataInner]**](BundleIdRelationshipsProfilesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_relationships_profiles import BundleIdRelationshipsProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdRelationshipsProfiles from a JSON string
bundle_id_relationships_profiles_instance = BundleIdRelationshipsProfiles.from_json(json)
# print the JSON string representation of the object
print(BundleIdRelationshipsProfiles.to_json())

# convert the object into a dict
bundle_id_relationships_profiles_dict = bundle_id_relationships_profiles_instance.to_dict()
# create an instance of BundleIdRelationshipsProfiles from a dict
bundle_id_relationships_profiles_from_dict = BundleIdRelationshipsProfiles.from_dict(bundle_id_relationships_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


