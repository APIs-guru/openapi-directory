# ProfileRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | [**ProfileRelationshipsBundleId**](ProfileRelationshipsBundleId.md) |  | [optional] 
**certificates** | [**ProfileRelationshipsCertificates**](ProfileRelationshipsCertificates.md) |  | [optional] 
**devices** | [**ProfileRelationshipsDevices**](ProfileRelationshipsDevices.md) |  | [optional] 

## Example

```python
from openapi_client.models.profile_relationships import ProfileRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileRelationships from a JSON string
profile_relationships_instance = ProfileRelationships.from_json(json)
# print the JSON string representation of the object
print(ProfileRelationships.to_json())

# convert the object into a dict
profile_relationships_dict = profile_relationships_instance.to_dict()
# create an instance of ProfileRelationships from a dict
profile_relationships_from_dict = ProfileRelationships.from_dict(profile_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


