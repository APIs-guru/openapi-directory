# ImportYumArtifactsRequest

The request to import new yum artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**ImportYumArtifactsGcsSource**](ImportYumArtifactsGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_yum_artifacts_request import ImportYumArtifactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportYumArtifactsRequest from a JSON string
import_yum_artifacts_request_instance = ImportYumArtifactsRequest.from_json(json)
# print the JSON string representation of the object
print(ImportYumArtifactsRequest.to_json())

# convert the object into a dict
import_yum_artifacts_request_dict = import_yum_artifacts_request_instance.to_dict()
# create an instance of ImportYumArtifactsRequest from a dict
import_yum_artifacts_request_from_dict = ImportYumArtifactsRequest.from_dict(import_yum_artifacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


