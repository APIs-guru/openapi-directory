# ApplicationArtifact

Managed application artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The managed application artifact name. | [optional] 
**type** | [**ApplicationArtifactType**](ApplicationArtifactType.md) |  | [optional] 
**uri** | **str** | The managed application artifact blob uri. | [optional] 

## Example

```python
from openapi_client.models.application_artifact import ApplicationArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationArtifact from a JSON string
application_artifact_instance = ApplicationArtifact.from_json(json)
# print the JSON string representation of the object
print(ApplicationArtifact.to_json())

# convert the object into a dict
application_artifact_dict = application_artifact_instance.to_dict()
# create an instance of ApplicationArtifact from a dict
application_artifact_from_dict = ApplicationArtifact.from_dict(application_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


