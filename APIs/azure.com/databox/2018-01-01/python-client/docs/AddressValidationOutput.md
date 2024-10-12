# AddressValidationOutput

Output of the address validation api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AddressValidationProperties**](AddressValidationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.address_validation_output import AddressValidationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AddressValidationOutput from a JSON string
address_validation_output_instance = AddressValidationOutput.from_json(json)
# print the JSON string representation of the object
print(AddressValidationOutput.to_json())

# convert the object into a dict
address_validation_output_dict = address_validation_output_instance.to_dict()
# create an instance of AddressValidationOutput from a dict
address_validation_output_from_dict = AddressValidationOutput.from_dict(address_validation_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


