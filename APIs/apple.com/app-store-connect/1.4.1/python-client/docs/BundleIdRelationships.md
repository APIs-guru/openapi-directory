# BundleIdRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**bundle_id_capabilities** | [**BundleIdRelationshipsBundleIdCapabilities**](BundleIdRelationshipsBundleIdCapabilities.md) |  | [optional] 
**profiles** | [**BundleIdRelationshipsProfiles**](BundleIdRelationshipsProfiles.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_relationships import BundleIdRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdRelationships from a JSON string
bundle_id_relationships_instance = BundleIdRelationships.from_json(json)
# print the JSON string representation of the object
print(BundleIdRelationships.to_json())

# convert the object into a dict
bundle_id_relationships_dict = bundle_id_relationships_instance.to_dict()
# create an instance of BundleIdRelationships from a dict
bundle_id_relationships_from_dict = BundleIdRelationships.from_dict(bundle_id_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


