# AgreementProperties

Agreement Terms definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **bool** | If any version of the terms have been accepted, otherwise false. | [optional] 
**license_text_link** | **str** | Link to HTML with Microsoft and Publisher terms. | [optional] 
**plan** | **str** | Plan identifier string of image being deployed. | [optional] 
**privacy_policy_link** | **str** | Link to the privacy policy of the publisher. | [optional] 
**product** | **str** | Offer identifier string of image being deployed. | [optional] 
**publisher** | **str** | Publisher identifier string of image being deployed. | [optional] 
**retrieve_datetime** | **datetime** | Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. | [optional] 
**signature** | **str** | Terms signature. | [optional] 

## Example

```python
from openapi_client.models.agreement_properties import AgreementProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AgreementProperties from a JSON string
agreement_properties_instance = AgreementProperties.from_json(json)
# print the JSON string representation of the object
print(AgreementProperties.to_json())

# convert the object into a dict
agreement_properties_dict = agreement_properties_instance.to_dict()
# create an instance of AgreementProperties from a dict
agreement_properties_from_dict = AgreementProperties.from_dict(agreement_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


