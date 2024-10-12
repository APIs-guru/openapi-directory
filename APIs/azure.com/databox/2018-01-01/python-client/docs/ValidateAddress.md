# ValidateAddress

The requirements to validate customer address where the device needs to be shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** | Device type to be used for the job. | 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | 

## Example

```python
from openapi_client.models.validate_address import ValidateAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateAddress from a JSON string
validate_address_instance = ValidateAddress.from_json(json)
# print the JSON string representation of the object
print(ValidateAddress.to_json())

# convert the object into a dict
validate_address_dict = validate_address_instance.to_dict()
# create an instance of ValidateAddress from a dict
validate_address_from_dict = ValidateAddress.from_dict(validate_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


