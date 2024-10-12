# CheckoutCustomFieldEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Area of the CheckoutCustomField | [optional] 
**custom_field_select_options** | **List[str]** | The values for the CheckoutCustomField selection | [optional] 
**deletable** | **bool** | True if the CheckoutCustomField can be removed from the store | [optional] [default to False]
**label** | **str** | Label given to the CheckoutCustomField | [optional] 
**position** | **int** | Position of the CheckoutCustomField | [optional] 
**required** | **bool** | True if the CheckoutCustomField is mandatory | [optional] [default to False]
**type** | **str** | Type of the CheckoutCustomField | [optional] 

## Example

```python
from openapi_client.models.checkout_custom_field_edit_fields import CheckoutCustomFieldEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutCustomFieldEditFields from a JSON string
checkout_custom_field_edit_fields_instance = CheckoutCustomFieldEditFields.from_json(json)
# print the JSON string representation of the object
print(CheckoutCustomFieldEditFields.to_json())

# convert the object into a dict
checkout_custom_field_edit_fields_dict = checkout_custom_field_edit_fields_instance.to_dict()
# create an instance of CheckoutCustomFieldEditFields from a dict
checkout_custom_field_edit_fields_from_dict = CheckoutCustomFieldEditFields.from_dict(checkout_custom_field_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


