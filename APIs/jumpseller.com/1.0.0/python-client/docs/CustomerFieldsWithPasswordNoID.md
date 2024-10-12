# CustomerFieldsWithPasswordNoID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**customer_category** | **List[int]** |  | [optional] 
**email** | **str** | Email of the Customer | [optional] 
**password** | **str** | Password | [optional] 
**phone** | **str** | Phone of the Customer | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**status** | **str** | Status of the Customer | [optional] 

## Example

```python
from openapi_client.models.customer_fields_with_password_no_id import CustomerFieldsWithPasswordNoID

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFieldsWithPasswordNoID from a JSON string
customer_fields_with_password_no_id_instance = CustomerFieldsWithPasswordNoID.from_json(json)
# print the JSON string representation of the object
print(CustomerFieldsWithPasswordNoID.to_json())

# convert the object into a dict
customer_fields_with_password_no_id_dict = customer_fields_with_password_no_id_instance.to_dict()
# create an instance of CustomerFieldsWithPasswordNoID from a dict
customer_fields_with_password_no_id_from_dict = CustomerFieldsWithPasswordNoID.from_dict(customer_fields_with_password_no_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


