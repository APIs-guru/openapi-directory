# ImportYumArtifactsGcsSource

Google Cloud Storage location where the artifacts currently reside.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uris** | **List[str]** | Cloud Storage paths URI (e.g., gs://my_bucket//my_object). | [optional] 
**use_wildcards** | **bool** | Supports URI wildcards for matching multiple objects from a single URI. | [optional] 

## Example

```python
from openapi_client.models.import_yum_artifacts_gcs_source import ImportYumArtifactsGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImportYumArtifactsGcsSource from a JSON string
import_yum_artifacts_gcs_source_instance = ImportYumArtifactsGcsSource.from_json(json)
# print the JSON string representation of the object
print(ImportYumArtifactsGcsSource.to_json())

# convert the object into a dict
import_yum_artifacts_gcs_source_dict = import_yum_artifacts_gcs_source_instance.to_dict()
# create an instance of ImportYumArtifactsGcsSource from a dict
import_yum_artifacts_gcs_source_from_dict = ImportYumArtifactsGcsSource.from_dict(import_yum_artifacts_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


