# FhirConfig

Specifies how to handle de-identification of a FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_keep_extensions** | **bool** | The behaviour for handling FHIR extensions that aren&#39;t otherwise specified for de-identification. If true, all extensions are preserved during de-identification by default. If false or unspecified, all extensions are removed during de-identification by default. | [optional] 
**field_metadata_list** | [**List[FieldMetadata]**](FieldMetadata.md) | Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions will be processed according to &#x60;default_keep_extensions&#x60;. If a field can be matched by more than one FieldMetadata, the first FieldMetadata.Action is applied. | [optional] 

## Example

```python
from openapi_client.models.fhir_config import FhirConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FhirConfig from a JSON string
fhir_config_instance = FhirConfig.from_json(json)
# print the JSON string representation of the object
print(FhirConfig.to_json())

# convert the object into a dict
fhir_config_dict = fhir_config_instance.to_dict()
# create an instance of FhirConfig from a dict
fhir_config_from_dict = FhirConfig.from_dict(fhir_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


