# ManifestChangeableAttributes

Changeable attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_enabled** | **bool** | Delete enabled | [optional] 
**list_enabled** | **bool** | List enabled | [optional] 
**quarantine_details** | **str** | Quarantine details | [optional] 
**quarantine_state** | **str** | Quarantine state | [optional] 
**read_enabled** | **bool** | Read enabled | [optional] 
**write_enabled** | **bool** | Write enabled | [optional] 

## Example

```python
from openapi_client.models.manifest_changeable_attributes import ManifestChangeableAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestChangeableAttributes from a JSON string
manifest_changeable_attributes_instance = ManifestChangeableAttributes.from_json(json)
# print the JSON string representation of the object
print(ManifestChangeableAttributes.to_json())

# convert the object into a dict
manifest_changeable_attributes_dict = manifest_changeable_attributes_instance.to_dict()
# create an instance of ManifestChangeableAttributes from a dict
manifest_changeable_attributes_from_dict = ManifestChangeableAttributes.from_dict(manifest_changeable_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


