# ValidateCustomDomainInput

Input of the custom domain to be validated for DNS mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The host name of the custom domain. Must be a domain name. | 

## Example

```python
from openapi_client.models.validate_custom_domain_input import ValidateCustomDomainInput

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateCustomDomainInput from a JSON string
validate_custom_domain_input_instance = ValidateCustomDomainInput.from_json(json)
# print the JSON string representation of the object
print(ValidateCustomDomainInput.to_json())

# convert the object into a dict
validate_custom_domain_input_dict = validate_custom_domain_input_instance.to_dict()
# create an instance of ValidateCustomDomainInput from a dict
validate_custom_domain_input_from_dict = ValidateCustomDomainInput.from_dict(validate_custom_domain_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


