# KfpArtifact

A detailed representation of a KFP artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the KFP artifact. Since users don&#39;t directly interact with this resource, the name will be derived from the associated version. For example, when version &#x3D; \&quot;.../versions/sha256:abcdef...\&quot;, the name will be \&quot;.../kfpArtifacts/sha256:abcdef...\&quot;. | [optional] [readonly] 
**version** | **str** | The version associated with the KFP artifact. Must follow the Semantic Versioning standard. | [optional] 

## Example

```python
from openapi_client.models.kfp_artifact import KfpArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of KfpArtifact from a JSON string
kfp_artifact_instance = KfpArtifact.from_json(json)
# print the JSON string representation of the object
print(KfpArtifact.to_json())

# convert the object into a dict
kfp_artifact_dict = kfp_artifact_instance.to_dict()
# create an instance of KfpArtifact from a dict
kfp_artifact_from_dict = KfpArtifact.from_dict(kfp_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


