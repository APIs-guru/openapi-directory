# SasPortalNrqzValidation

Information about National Radio Quiet Zone validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_id** | **str** | Validation case ID. | [optional] 
**cpi_id** | **str** | CPI who signed the validation. | [optional] 
**latitude** | **float** | Device latitude that&#39;s associated with the validation. | [optional] 
**longitude** | **float** | Device longitude that&#39;s associated with the validation. | [optional] 
**state** | **str** | State of the NRQZ validation info. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_nrqz_validation import SasPortalNrqzValidation

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalNrqzValidation from a JSON string
sas_portal_nrqz_validation_instance = SasPortalNrqzValidation.from_json(json)
# print the JSON string representation of the object
print(SasPortalNrqzValidation.to_json())

# convert the object into a dict
sas_portal_nrqz_validation_dict = sas_portal_nrqz_validation_instance.to_dict()
# create an instance of SasPortalNrqzValidation from a dict
sas_portal_nrqz_validation_from_dict = SasPortalNrqzValidation.from_dict(sas_portal_nrqz_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


