# DeidentifyConfig

Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation** | [**AnnotationConfig**](AnnotationConfig.md) |  | [optional] 
**dicom** | [**DicomConfig**](DicomConfig.md) |  | [optional] 
**dicom_tag_config** | [**DicomTagConfig**](DicomTagConfig.md) |  | [optional] 
**fhir** | [**FhirConfig**](FhirConfig.md) |  | [optional] 
**fhir_field_config** | [**FhirFieldConfig**](FhirFieldConfig.md) |  | [optional] 
**image** | [**ImageConfig**](ImageConfig.md) |  | [optional] 
**operation_metadata** | [**DeidentifyOperationMetadata**](DeidentifyOperationMetadata.md) |  | [optional] 
**text** | [**TextConfig**](TextConfig.md) |  | [optional] 
**use_regional_data_processing** | **bool** | Ensures in-flight data remains in the region of origin during de-identification. Using this option results in a significant reduction of throughput, and is not compatible with &#x60;LOCATION&#x60; or &#x60;ORGANIZATION_NAME&#x60; infoTypes. If the deprecated DicomConfig or FhirConfig are used, then &#x60;LOCATION&#x60; must be excluded within TextConfig, and must also be excluded within ImageConfig if image redaction is required. | [optional] 

## Example

```python
from openapi_client.models.deidentify_config import DeidentifyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeidentifyConfig from a JSON string
deidentify_config_instance = DeidentifyConfig.from_json(json)
# print the JSON string representation of the object
print(DeidentifyConfig.to_json())

# convert the object into a dict
deidentify_config_dict = deidentify_config_instance.to_dict()
# create an instance of DeidentifyConfig from a dict
deidentify_config_from_dict = DeidentifyConfig.from_dict(deidentify_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


