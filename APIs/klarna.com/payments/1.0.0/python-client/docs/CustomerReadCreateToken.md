# CustomerReadCreateToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_birth** | **str** | Customer’s date of birth. The format is ‘yyyy-mm-dd’ | [optional] 
**gender** | **str** | Customer’s gender - ‘male’ or ‘female’ | [optional] 

## Example

```python
from openapi_client.models.customer_read_create_token import CustomerReadCreateToken

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerReadCreateToken from a JSON string
customer_read_create_token_instance = CustomerReadCreateToken.from_json(json)
# print the JSON string representation of the object
print(CustomerReadCreateToken.to_json())

# convert the object into a dict
customer_read_create_token_dict = customer_read_create_token_instance.to_dict()
# create an instance of CustomerReadCreateToken from a dict
customer_read_create_token_from_dict = CustomerReadCreateToken.from_dict(customer_read_create_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


