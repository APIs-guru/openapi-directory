# ProfileRelationshipsBundleId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData**](BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.profile_relationships_bundle_id import ProfileRelationshipsBundleId

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileRelationshipsBundleId from a JSON string
profile_relationships_bundle_id_instance = ProfileRelationshipsBundleId.from_json(json)
# print the JSON string representation of the object
print(ProfileRelationshipsBundleId.to_json())

# convert the object into a dict
profile_relationships_bundle_id_dict = profile_relationships_bundle_id_instance.to_dict()
# create an instance of ProfileRelationshipsBundleId from a dict
profile_relationships_bundle_id_from_dict = ProfileRelationshipsBundleId.from_dict(profile_relationships_bundle_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


