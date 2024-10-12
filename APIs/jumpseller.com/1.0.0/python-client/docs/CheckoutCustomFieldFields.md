# CheckoutCustomFieldFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Area of the CheckoutCustomField | [optional] 
**custom_field_select_options** | **List[str]** | The values for the CheckoutCustomField selection | [optional] 
**deletable** | **bool** | True if the CheckoutCustomField can be removed from the store | [optional] [default to False]
**id** | **int** | Unique identifier of the CheckoutCustomField | [optional] 
**label** | **str** | Label given to the CheckoutCustomField | [optional] 
**position** | **int** | Position of the CheckoutCustomField | [optional] 
**required** | **bool** | True if the CheckoutCustomField is mandatory | [optional] [default to False]
**type** | **str** | Type of the CheckoutCustomField | [optional] 

## Example

```python
from openapi_client.models.checkout_custom_field_fields import CheckoutCustomFieldFields

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutCustomFieldFields from a JSON string
checkout_custom_field_fields_instance = CheckoutCustomFieldFields.from_json(json)
# print the JSON string representation of the object
print(CheckoutCustomFieldFields.to_json())

# convert the object into a dict
checkout_custom_field_fields_dict = checkout_custom_field_fields_instance.to_dict()
# create an instance of CheckoutCustomFieldFields from a dict
checkout_custom_field_fields_from_dict = CheckoutCustomFieldFields.from_dict(checkout_custom_field_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


