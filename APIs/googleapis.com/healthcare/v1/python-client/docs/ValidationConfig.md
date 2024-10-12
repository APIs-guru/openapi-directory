# ValidationConfig

Contains the configuration for FHIR profiles and validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_fhirpath_validation** | **bool** | Whether to disable FHIRPath validation for incoming resources. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. | [optional] 
**disable_profile_validation** | **bool** | Whether to disable profile validation for this FHIR store. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store. | [optional] 
**disable_reference_type_validation** | **bool** | Whether to disable reference type validation for incoming resources. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. | [optional] 
**disable_required_field_validation** | **bool** | Whether to disable required fields validation for incoming resources. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced. | [optional] 
**enabled_implementation_guides** | **List[str]** | A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation. For example, to use the US Core profiles for validation, set &#x60;enabled_implementation_guides&#x60; to &#x60;[\&quot;http://hl7.org/fhir/us/core/ImplementationGuide/ig\&quot;]&#x60;. If &#x60;enabled_implementation_guides&#x60; is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the &#x60;global&#x60; property of one of the enabled ImplementationGuides. The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported: - min/max - minValue/maxValue - maxLength - type - fixed[x] - pattern[x] on simple types - slicing, when using \&quot;value\&quot; as the discriminator type When a URL cannot be resolved (for example, in a type assertion), the server does not return an error. | [optional] 

## Example

```python
from openapi_client.models.validation_config import ValidationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationConfig from a JSON string
validation_config_instance = ValidationConfig.from_json(json)
# print the JSON string representation of the object
print(ValidationConfig.to_json())

# convert the object into a dict
validation_config_dict = validation_config_instance.to_dict()
# create an instance of ValidationConfig from a dict
validation_config_from_dict = ValidationConfig.from_dict(validation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


