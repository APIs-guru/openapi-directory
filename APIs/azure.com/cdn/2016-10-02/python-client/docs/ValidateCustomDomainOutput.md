# ValidateCustomDomainOutput

Output of custom domain validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_domain_validated** | **bool** | Indicates whether the custom domain is validated or not. | [optional] 
**message** | **str** | Error message describing why the custom domain is not valid. | [optional] 
**reason** | **str** | The reason why the custom domain is not valid. | [optional] 

## Example

```python
from openapi_client.models.validate_custom_domain_output import ValidateCustomDomainOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateCustomDomainOutput from a JSON string
validate_custom_domain_output_instance = ValidateCustomDomainOutput.from_json(json)
# print the JSON string representation of the object
print(ValidateCustomDomainOutput.to_json())

# convert the object into a dict
validate_custom_domain_output_dict = validate_custom_domain_output_instance.to_dict()
# create an instance of ValidateCustomDomainOutput from a dict
validate_custom_domain_output_from_dict = ValidateCustomDomainOutput.from_dict(validate_custom_domain_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


