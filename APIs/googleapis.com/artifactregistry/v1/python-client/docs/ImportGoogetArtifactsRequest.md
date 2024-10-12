# ImportGoogetArtifactsRequest

The request to import new googet artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**ImportGoogetArtifactsGcsSource**](ImportGoogetArtifactsGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_googet_artifacts_request import ImportGoogetArtifactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportGoogetArtifactsRequest from a JSON string
import_googet_artifacts_request_instance = ImportGoogetArtifactsRequest.from_json(json)
# print the JSON string representation of the object
print(ImportGoogetArtifactsRequest.to_json())

# convert the object into a dict
import_googet_artifacts_request_dict = import_googet_artifacts_request_instance.to_dict()
# create an instance of ImportGoogetArtifactsRequest from a dict
import_googet_artifacts_request_from_dict = ImportGoogetArtifactsRequest.from_dict(import_googet_artifacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


