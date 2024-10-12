# AddressValidationProperties

The address validation output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_addresses** | [**List[ShippingAddress]**](ShippingAddress.md) | List of alternate addresses. | [optional] [readonly] 
**validation_status** | **str** | The address validation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.address_validation_properties import AddressValidationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AddressValidationProperties from a JSON string
address_validation_properties_instance = AddressValidationProperties.from_json(json)
# print the JSON string representation of the object
print(AddressValidationProperties.to_json())

# convert the object into a dict
address_validation_properties_dict = address_validation_properties_instance.to_dict()
# create an instance of AddressValidationProperties from a dict
address_validation_properties_from_dict = AddressValidationProperties.from_dict(address_validation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


