# CustomerFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**customer_additional_fields** | [**List[CustomerAdditionalField]**](CustomerAdditionalField.md) |  | [optional] 
**customer_categories** | [**List[CustomerCategory]**](CustomerCategory.md) |  | [optional] 
**email** | **str** | Email of the Customer | [optional] 
**id** | **int** | Unique identifier of the Customer | [optional] 
**name** | **str** | Name of the Customer | [optional] 
**phone** | **str** | Phone of the Customer | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**status** | **str** | Status of the Customer | [optional] 
**surname** | **str** | Surname of the Customer | [optional] 

## Example

```python
from openapi_client.models.customer_fields import CustomerFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFields from a JSON string
customer_fields_instance = CustomerFields.from_json(json)
# print the JSON string representation of the object
print(CustomerFields.to_json())

# convert the object into a dict
customer_fields_dict = customer_fields_instance.to_dict()
# create an instance of CustomerFields from a dict
customer_fields_from_dict = CustomerFields.from_dict(customer_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


