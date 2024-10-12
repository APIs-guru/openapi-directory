# BundleIdRelationshipsBundleIdCapabilities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BundleIdRelationshipsBundleIdCapabilitiesDataInner]**](BundleIdRelationshipsBundleIdCapabilitiesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_relationships_bundle_id_capabilities import BundleIdRelationshipsBundleIdCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdRelationshipsBundleIdCapabilities from a JSON string
bundle_id_relationships_bundle_id_capabilities_instance = BundleIdRelationshipsBundleIdCapabilities.from_json(json)
# print the JSON string representation of the object
print(BundleIdRelationshipsBundleIdCapabilities.to_json())

# convert the object into a dict
bundle_id_relationships_bundle_id_capabilities_dict = bundle_id_relationships_bundle_id_capabilities_instance.to_dict()
# create an instance of BundleIdRelationshipsBundleIdCapabilities from a dict
bundle_id_relationships_bundle_id_capabilities_from_dict = BundleIdRelationshipsBundleIdCapabilities.from_dict(bundle_id_relationships_bundle_id_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


