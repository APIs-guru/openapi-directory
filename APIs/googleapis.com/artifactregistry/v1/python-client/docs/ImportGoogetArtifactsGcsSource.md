# ImportGoogetArtifactsGcsSource

Google Cloud Storage location where the artifacts currently reside.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uris** | **List[str]** | Cloud Storage paths URI (e.g., &#x60;gs://my_bucket/my_object&#x60;). | [optional] 
**use_wildcards** | **bool** | Supports URI wildcards for matching multiple objects from a single URI. | [optional] 

## Example

```python
from openapi_client.models.import_googet_artifacts_gcs_source import ImportGoogetArtifactsGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImportGoogetArtifactsGcsSource from a JSON string
import_googet_artifacts_gcs_source_instance = ImportGoogetArtifactsGcsSource.from_json(json)
# print the JSON string representation of the object
print(ImportGoogetArtifactsGcsSource.to_json())

# convert the object into a dict
import_googet_artifacts_gcs_source_dict = import_googet_artifacts_gcs_source_instance.to_dict()
# create an instance of ImportGoogetArtifactsGcsSource from a dict
import_googet_artifacts_gcs_source_from_dict = ImportGoogetArtifactsGcsSource.from_dict(import_googet_artifacts_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


