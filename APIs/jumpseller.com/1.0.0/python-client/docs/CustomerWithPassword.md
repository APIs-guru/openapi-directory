# CustomerWithPassword


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**CustomerFieldsWithPassword**](CustomerFieldsWithPassword.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_with_password import CustomerWithPassword

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerWithPassword from a JSON string
customer_with_password_instance = CustomerWithPassword.from_json(json)
# print the JSON string representation of the object
print(CustomerWithPassword.to_json())

# convert the object into a dict
customer_with_password_dict = customer_with_password_instance.to_dict()
# create an instance of CustomerWithPassword from a dict
customer_with_password_from_dict = CustomerWithPassword.from_dict(customer_with_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


