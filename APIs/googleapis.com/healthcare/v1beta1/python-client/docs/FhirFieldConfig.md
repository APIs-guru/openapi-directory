# FhirFieldConfig

Specifies how to handle the de-identification of a FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_metadata_list** | [**List[GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata]**](GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.md) | Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata &#x60;action&#x60; is passed through to the output dataset unmodified. All extensions will be processed according to keep_extensions. If a field can be matched by more than one FieldMetadata &#x60;action&#x60;, the first &#x60;action&#x60; option is applied. Overrides options and the union field &#x60;profile&#x60; in FhirFieldConfig. | [optional] 
**options** | [**GoogleCloudHealthcareV1beta1DeidentifyOptions**](GoogleCloudHealthcareV1beta1DeidentifyOptions.md) |  | [optional] 
**profile_type** | **str** | Base profile type for handling FHIR fields. | [optional] 

## Example

```python
from openapi_client.models.fhir_field_config import FhirFieldConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FhirFieldConfig from a JSON string
fhir_field_config_instance = FhirFieldConfig.from_json(json)
# print the JSON string representation of the object
print(FhirFieldConfig.to_json())

# convert the object into a dict
fhir_field_config_dict = fhir_field_config_instance.to_dict()
# create an instance of FhirFieldConfig from a dict
fhir_field_config_from_dict = FhirFieldConfig.from_dict(fhir_field_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


