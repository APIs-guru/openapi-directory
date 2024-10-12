# Release

A `Release` resource in the Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abandoned** | **bool** | Output only. Indicates whether this is an abandoned release. | [optional] [readonly] 
**annotations** | **Dict[str, str]** | User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. | [optional] 
**build_artifacts** | [**List[BuildArtifact]**](BuildArtifact.md) | List of artifacts to pass through to Skaffold command. | [optional] 
**condition** | [**ReleaseCondition**](ReleaseCondition.md) |  | [optional] 
**create_time** | **str** | Output only. Time at which the &#x60;Release&#x60; was created. | [optional] [readonly] 
**custom_target_type_snapshots** | [**List[CustomTargetType]**](CustomTargetType.md) | Output only. Snapshot of the custom target types referenced by the targets taken at release creation time. | [optional] [readonly] 
**delivery_pipeline_snapshot** | [**DeliveryPipeline**](DeliveryPipeline.md) |  | [optional] 
**deploy_parameters** | **Dict[str, str]** | Optional. The deploy parameters to use for all targets in this release. | [optional] 
**description** | **str** | Description of the &#x60;Release&#x60;. Max length is 255 characters. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes. | [optional] 
**name** | **str** | Optional. Name of the &#x60;Release&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/a-z{0,62}&#x60;. | [optional] 
**render_end_time** | **str** | Output only. Time at which the render completed. | [optional] [readonly] 
**render_start_time** | **str** | Output only. Time at which the render began. | [optional] [readonly] 
**render_state** | **str** | Output only. Current state of the render operation. | [optional] [readonly] 
**skaffold_config_path** | **str** | Filepath of the Skaffold config inside of the config URI. | [optional] 
**skaffold_config_uri** | **str** | Cloud Storage URI of tar.gz archive containing Skaffold configuration. | [optional] 
**skaffold_version** | **str** | The Skaffold version to use when operating on this release, such as \&quot;1.20.0\&quot;. Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used. | [optional] 
**target_artifacts** | [**Dict[str, TargetArtifact]**](TargetArtifact.md) | Output only. Map from target ID to the target artifacts created during the render operation. | [optional] [readonly] 
**target_renders** | [**Dict[str, TargetRender]**](TargetRender.md) | Output only. Map from target ID to details of the render operation for that target. | [optional] [readonly] 
**target_snapshots** | [**List[Target]**](Target.md) | Output only. Snapshot of the targets taken at release creation time. | [optional] [readonly] 
**uid** | **str** | Output only. Unique identifier of the &#x60;Release&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.release import Release

# TODO update the JSON string below
json = "{}"
# create an instance of Release from a JSON string
release_instance = Release.from_json(json)
# print the JSON string representation of the object
print(Release.to_json())

# convert the object into a dict
release_dict = release_instance.to_dict()
# create an instance of Release from a dict
release_from_dict = Release.from_dict(release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


