# CheckoutCustomField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_custom_field** | [**CheckoutCustomFieldFields**](CheckoutCustomFieldFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.checkout_custom_field import CheckoutCustomField

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutCustomField from a JSON string
checkout_custom_field_instance = CheckoutCustomField.from_json(json)
# print the JSON string representation of the object
print(CheckoutCustomField.to_json())

# convert the object into a dict
checkout_custom_field_dict = checkout_custom_field_instance.to_dict()
# create an instance of CheckoutCustomField from a dict
checkout_custom_field_from_dict = CheckoutCustomField.from_dict(checkout_custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


