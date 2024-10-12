# BundleResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**ActionResourceRelationshipsPlan**](ActionResourceRelationshipsPlan.md) |  | [optional] 
**plan** | [**ActionResourceRelationshipsPlan**](ActionResourceRelationshipsPlan.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_resource_relationships import BundleResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BundleResourceRelationships from a JSON string
bundle_resource_relationships_instance = BundleResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(BundleResourceRelationships.to_json())

# convert the object into a dict
bundle_resource_relationships_dict = bundle_resource_relationships_instance.to_dict()
# create an instance of BundleResourceRelationships from a dict
bundle_resource_relationships_from_dict = BundleResourceRelationships.from_dict(bundle_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


