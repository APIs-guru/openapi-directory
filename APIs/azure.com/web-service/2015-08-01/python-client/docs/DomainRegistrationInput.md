# DomainRegistrationInput

Domain registration input for validation Api

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.domain_registration_input import DomainRegistrationInput

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationInput from a JSON string
domain_registration_input_instance = DomainRegistrationInput.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationInput.to_json())

# convert the object into a dict
domain_registration_input_dict = domain_registration_input_instance.to_dict()
# create an instance of DomainRegistrationInput from a dict
domain_registration_input_from_dict = DomainRegistrationInput.from_dict(domain_registration_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


