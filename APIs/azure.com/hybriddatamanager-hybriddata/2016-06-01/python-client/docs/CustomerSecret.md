# CustomerSecret

The pair of customer secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The encryption algorithm used to encrypt data. | 
**key_identifier** | **str** | The identifier to the data service input object which this secret corresponds to. | 
**key_value** | **str** | It contains the encrypted customer secret. | 

## Example

```python
from openapi_client.models.customer_secret import CustomerSecret

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSecret from a JSON string
customer_secret_instance = CustomerSecret.from_json(json)
# print the JSON string representation of the object
print(CustomerSecret.to_json())

# convert the object into a dict
customer_secret_dict = customer_secret_instance.to_dict()
# create an instance of CustomerSecret from a dict
customer_secret_from_dict = CustomerSecret.from_dict(customer_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


