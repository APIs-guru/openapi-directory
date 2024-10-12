# ImportAptArtifactsRequest

The request to import new apt artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**ImportAptArtifactsGcsSource**](ImportAptArtifactsGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_apt_artifacts_request import ImportAptArtifactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAptArtifactsRequest from a JSON string
import_apt_artifacts_request_instance = ImportAptArtifactsRequest.from_json(json)
# print the JSON string representation of the object
print(ImportAptArtifactsRequest.to_json())

# convert the object into a dict
import_apt_artifacts_request_dict = import_apt_artifacts_request_instance.to_dict()
# create an instance of ImportAptArtifactsRequest from a dict
import_apt_artifacts_request_from_dict = ImportAptArtifactsRequest.from_dict(import_apt_artifacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


