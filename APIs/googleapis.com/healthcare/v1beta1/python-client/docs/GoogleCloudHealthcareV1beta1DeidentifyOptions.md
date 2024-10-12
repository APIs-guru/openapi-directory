# GoogleCloudHealthcareV1beta1DeidentifyOptions

Specifies additional options to apply to the base ProfileType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_mask_config** | [**CharacterMaskConfig**](CharacterMaskConfig.md) |  | [optional] 
**contextual_deid** | **object** | Fields that don&#39;t match a KeepField or CleanTextField &#x60;action&#x60; in the BASIC profile are collected into a contextual phrase list. For fields that match a CleanTextField &#x60;action&#x60; in FieldMetadata or ProfileType, the process attempts to transform phrases matching these contextual entries. These contextual phrases are replaced with the token \&quot;[CTX]\&quot;. This feature uses an additional InfoType during inspection. | [optional] 
**crypto_hash_config** | [**CryptoHashConfig**](CryptoHashConfig.md) |  | [optional] 
**date_shift_config** | [**DateShiftConfig**](DateShiftConfig.md) |  | [optional] 
**keep_extensions** | **object** | The behavior for handling FHIR extensions that aren&#39;t otherwise specified for de-identification. If provided, all extensions are preserved during de-identification by default. If unspecified, all extensions are removed during de-identification by default. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1beta1_deidentify_options import GoogleCloudHealthcareV1beta1DeidentifyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1beta1DeidentifyOptions from a JSON string
google_cloud_healthcare_v1beta1_deidentify_options_instance = GoogleCloudHealthcareV1beta1DeidentifyOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1beta1DeidentifyOptions.to_json())

# convert the object into a dict
google_cloud_healthcare_v1beta1_deidentify_options_dict = google_cloud_healthcare_v1beta1_deidentify_options_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1beta1DeidentifyOptions from a dict
google_cloud_healthcare_v1beta1_deidentify_options_from_dict = GoogleCloudHealthcareV1beta1DeidentifyOptions.from_dict(google_cloud_healthcare_v1beta1_deidentify_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


