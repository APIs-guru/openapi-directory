# ArtifactSourceProperties

Properties of an artifact source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arm_template_folder_path** | **str** | The folder containing Azure Resource Manager templates. | [optional] 
**branch_ref** | **str** | The artifact source&#39;s branch reference. | [optional] 
**created_date** | **datetime** | The artifact source&#39;s creation date. | [optional] [readonly] 
**display_name** | **str** | The artifact source&#39;s display name. | [optional] 
**folder_path** | **str** | The folder containing artifacts. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**security_token** | **str** | The security token to authenticate to the artifact source. | [optional] 
**source_type** | **str** | The artifact source&#39;s type. | [optional] 
**status** | **str** | Indicates if the artifact source is enabled (values: Enabled, Disabled). | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 
**uri** | **str** | The artifact source&#39;s URI. | [optional] 

## Example

```python
from openapi_client.models.artifact_source_properties import ArtifactSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactSourceProperties from a JSON string
artifact_source_properties_instance = ArtifactSourceProperties.from_json(json)
# print the JSON string representation of the object
print(ArtifactSourceProperties.to_json())

# convert the object into a dict
artifact_source_properties_dict = artifact_source_properties_instance.to_dict()
# create an instance of ArtifactSourceProperties from a dict
artifact_source_properties_from_dict = ArtifactSourceProperties.from_dict(artifact_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


