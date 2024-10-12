# CustomerAdditionalFieldEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_custom_field_id** | **int** | Unique identifier of the Checkout Custom Field | [optional] 
**value** | **str** | Value of the Customer Additional Field | [optional] 

## Example

```python
from openapi_client.models.customer_additional_field_edit_fields import CustomerAdditionalFieldEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAdditionalFieldEditFields from a JSON string
customer_additional_field_edit_fields_instance = CustomerAdditionalFieldEditFields.from_json(json)
# print the JSON string representation of the object
print(CustomerAdditionalFieldEditFields.to_json())

# convert the object into a dict
customer_additional_field_edit_fields_dict = customer_additional_field_edit_fields_instance.to_dict()
# create an instance of CustomerAdditionalFieldEditFields from a dict
customer_additional_field_edit_fields_from_dict = CustomerAdditionalFieldEditFields.from_dict(customer_additional_field_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


