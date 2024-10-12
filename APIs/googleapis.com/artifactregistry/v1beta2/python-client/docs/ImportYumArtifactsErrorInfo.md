# ImportYumArtifactsErrorInfo

Error information explaining why a package was not imported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**gcs_source** | [**ImportYumArtifactsGcsSource**](ImportYumArtifactsGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_yum_artifacts_error_info import ImportYumArtifactsErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ImportYumArtifactsErrorInfo from a JSON string
import_yum_artifacts_error_info_instance = ImportYumArtifactsErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ImportYumArtifactsErrorInfo.to_json())

# convert the object into a dict
import_yum_artifacts_error_info_dict = import_yum_artifacts_error_info_instance.to_dict()
# create an instance of ImportYumArtifactsErrorInfo from a dict
import_yum_artifacts_error_info_from_dict = ImportYumArtifactsErrorInfo.from_dict(import_yum_artifacts_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


