# SustainabilityCertifications

Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breeam_certification** | **str** | BREEAM certification. | [optional] 
**breeam_certification_exception** | **str** | BREEAM certification exception. | [optional] 
**eco_certifications** | [**List[EcoCertification]**](EcoCertification.md) | The eco certificates awarded to the hotel. | [optional] 
**leed_certification** | **str** | LEED certification. | [optional] 
**leed_certification_exception** | **str** | LEED certification exception. | [optional] 

## Example

```python
from openapi_client.models.sustainability_certifications import SustainabilityCertifications

# TODO update the JSON string below
json = "{}"
# create an instance of SustainabilityCertifications from a JSON string
sustainability_certifications_instance = SustainabilityCertifications.from_json(json)
# print the JSON string representation of the object
print(SustainabilityCertifications.to_json())

# convert the object into a dict
sustainability_certifications_dict = sustainability_certifications_instance.to_dict()
# create an instance of SustainabilityCertifications from a dict
sustainability_certifications_from_dict = SustainabilityCertifications.from_dict(sustainability_certifications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


