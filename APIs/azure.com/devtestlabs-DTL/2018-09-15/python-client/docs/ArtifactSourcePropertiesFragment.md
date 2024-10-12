# ArtifactSourcePropertiesFragment

Properties of an artifact source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arm_template_folder_path** | **str** | The folder containing Azure Resource Manager templates. | [optional] 
**branch_ref** | **str** | The artifact source&#39;s branch reference. | [optional] 
**display_name** | **str** | The artifact source&#39;s display name. | [optional] 
**folder_path** | **str** | The folder containing artifacts. | [optional] 
**security_token** | **str** | The security token to authenticate to the artifact source. | [optional] 
**source_type** | **str** | The artifact source&#39;s type. | [optional] 
**status** | **str** | Indicates if the artifact source is enabled (values: Enabled, Disabled). | [optional] 
**uri** | **str** | The artifact source&#39;s URI. | [optional] 

## Example

```python
from openapi_client.models.artifact_source_properties_fragment import ArtifactSourcePropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactSourcePropertiesFragment from a JSON string
artifact_source_properties_fragment_instance = ArtifactSourcePropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ArtifactSourcePropertiesFragment.to_json())

# convert the object into a dict
artifact_source_properties_fragment_dict = artifact_source_properties_fragment_instance.to_dict()
# create an instance of ArtifactSourcePropertiesFragment from a dict
artifact_source_properties_fragment_from_dict = ArtifactSourcePropertiesFragment.from_dict(artifact_source_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


