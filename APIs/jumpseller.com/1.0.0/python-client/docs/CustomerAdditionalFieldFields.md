# CustomerAdditionalFieldFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Area of the Customer Additional Field | [optional] 
**checkout_custom_field_id** | **int** | Unique identifier of the Checkout Custom Field | [optional] 
**customer_id** | **int** | Unique identifier of the Customer | [optional] 
**id** | **int** | Unique identifier of the Customer Additional Field | [optional] 
**label** | **str** | Label of the Customer Additional Field | [optional] 
**value** | **str** | Value of the Customer Additional Field | [optional] 

## Example

```python
from openapi_client.models.customer_additional_field_fields import CustomerAdditionalFieldFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAdditionalFieldFields from a JSON string
customer_additional_field_fields_instance = CustomerAdditionalFieldFields.from_json(json)
# print the JSON string representation of the object
print(CustomerAdditionalFieldFields.to_json())

# convert the object into a dict
customer_additional_field_fields_dict = customer_additional_field_fields_instance.to_dict()
# create an instance of CustomerAdditionalFieldFields from a dict
customer_additional_field_fields_from_dict = CustomerAdditionalFieldFields.from_dict(customer_additional_field_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


