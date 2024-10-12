# EcoCertification

An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awarded** | **bool** | Whether the eco certificate was awarded or not. | [optional] 
**awarded_exception** | **str** | Awarded exception. | [optional] 
**eco_certificate** | **str** | Required. The eco certificate. | [optional] 

## Example

```python
from openapi_client.models.eco_certification import EcoCertification

# TODO update the JSON string below
json = "{}"
# create an instance of EcoCertification from a JSON string
eco_certification_instance = EcoCertification.from_json(json)
# print the JSON string representation of the object
print(EcoCertification.to_json())

# convert the object into a dict
eco_certification_dict = eco_certification_instance.to_dict()
# create an instance of EcoCertification from a dict
eco_certification_from_dict = EcoCertification.from_dict(eco_certification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


