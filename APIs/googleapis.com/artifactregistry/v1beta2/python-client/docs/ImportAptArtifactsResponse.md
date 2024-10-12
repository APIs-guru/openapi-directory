# ImportAptArtifactsResponse

The response message from importing APT artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt_artifacts** | [**List[AptArtifact]**](AptArtifact.md) | The Apt artifacts imported. | [optional] 
**errors** | [**List[ImportAptArtifactsErrorInfo]**](ImportAptArtifactsErrorInfo.md) | Detailed error info for packages that were not imported. | [optional] 

## Example

```python
from openapi_client.models.import_apt_artifacts_response import ImportAptArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAptArtifactsResponse from a JSON string
import_apt_artifacts_response_instance = ImportAptArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(ImportAptArtifactsResponse.to_json())

# convert the object into a dict
import_apt_artifacts_response_dict = import_apt_artifacts_response_instance.to_dict()
# create an instance of ImportAptArtifactsResponse from a dict
import_apt_artifacts_response_from_dict = ImportAptArtifactsResponse.from_dict(import_apt_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


