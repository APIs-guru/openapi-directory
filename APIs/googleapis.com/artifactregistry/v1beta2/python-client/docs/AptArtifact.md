# AptArtifact

A detailed representation of an Apt artifact. Information in the record is derived from the archive's control file. See https://www.debian.org/doc/debian-policy/ch-controlfields.html

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | Output only. Operating system architecture of the artifact. | [optional] [readonly] 
**component** | **str** | Output only. Repository component of the artifact. | [optional] [readonly] 
**control_file** | **bytearray** | Output only. Contents of the artifact&#39;s control metadata file. | [optional] [readonly] 
**name** | **str** | Output only. The Artifact Registry resource name of the artifact. | [optional] [readonly] 
**package_name** | **str** | Output only. The Apt package name of the artifact. | [optional] [readonly] 
**package_type** | **str** | Output only. An artifact is a binary or source package. | [optional] [readonly] 

## Example

```python
from openapi_client.models.apt_artifact import AptArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of AptArtifact from a JSON string
apt_artifact_instance = AptArtifact.from_json(json)
# print the JSON string representation of the object
print(AptArtifact.to_json())

# convert the object into a dict
apt_artifact_dict = apt_artifact_instance.to_dict()
# create an instance of AptArtifact from a dict
apt_artifact_from_dict = AptArtifact.from_dict(apt_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


