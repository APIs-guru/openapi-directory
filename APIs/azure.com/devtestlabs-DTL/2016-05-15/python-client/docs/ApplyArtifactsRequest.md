# ApplyArtifactsRequest

Request body for applying artifacts to a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[ArtifactInstallProperties]**](ArtifactInstallProperties.md) | The list of artifacts to apply. | [optional] 

## Example

```python
from openapi_client.models.apply_artifacts_request import ApplyArtifactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyArtifactsRequest from a JSON string
apply_artifacts_request_instance = ApplyArtifactsRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyArtifactsRequest.to_json())

# convert the object into a dict
apply_artifacts_request_dict = apply_artifacts_request_instance.to_dict()
# create an instance of ApplyArtifactsRequest from a dict
apply_artifacts_request_from_dict = ApplyArtifactsRequest.from_dict(apply_artifacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


