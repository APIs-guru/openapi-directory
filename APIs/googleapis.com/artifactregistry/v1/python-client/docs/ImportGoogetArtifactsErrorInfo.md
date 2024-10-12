# ImportGoogetArtifactsErrorInfo

Error information explaining why a package was not imported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**gcs_source** | [**ImportGoogetArtifactsGcsSource**](ImportGoogetArtifactsGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_googet_artifacts_error_info import ImportGoogetArtifactsErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ImportGoogetArtifactsErrorInfo from a JSON string
import_googet_artifacts_error_info_instance = ImportGoogetArtifactsErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ImportGoogetArtifactsErrorInfo.to_json())

# convert the object into a dict
import_googet_artifacts_error_info_dict = import_googet_artifacts_error_info_instance.to_dict()
# create an instance of ImportGoogetArtifactsErrorInfo from a dict
import_googet_artifacts_error_info_from_dict = ImportGoogetArtifactsErrorInfo.from_dict(import_googet_artifacts_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


