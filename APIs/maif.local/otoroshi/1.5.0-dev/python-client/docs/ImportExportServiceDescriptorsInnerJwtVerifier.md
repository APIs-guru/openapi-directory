# ImportExportServiceDescriptorsInnerJwtVerifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algo_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | 
**enabled** | **bool** | Is it enabled | 
**source** | [**GlobalJwtVerifierSource**](GlobalJwtVerifierSource.md) |  | 
**strategy** | [**GlobalJwtVerifierStrategy**](GlobalJwtVerifierStrategy.md) |  | 
**strict** | **bool** | Does it fail if JWT not found | 
**type** | **str** | A string with value &#39;ref&#39; | 
**id** | **str** | The id of the GlobalJWTVerifier | 

## Example

```python
from openapi_client.models.import_export_service_descriptors_inner_jwt_verifier import ImportExportServiceDescriptorsInnerJwtVerifier

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportServiceDescriptorsInnerJwtVerifier from a JSON string
import_export_service_descriptors_inner_jwt_verifier_instance = ImportExportServiceDescriptorsInnerJwtVerifier.from_json(json)
# print the JSON string representation of the object
print(ImportExportServiceDescriptorsInnerJwtVerifier.to_json())

# convert the object into a dict
import_export_service_descriptors_inner_jwt_verifier_dict = import_export_service_descriptors_inner_jwt_verifier_instance.to_dict()
# create an instance of ImportExportServiceDescriptorsInnerJwtVerifier from a dict
import_export_service_descriptors_inner_jwt_verifier_from_dict = ImportExportServiceDescriptorsInnerJwtVerifier.from_dict(import_export_service_descriptors_inner_jwt_verifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


