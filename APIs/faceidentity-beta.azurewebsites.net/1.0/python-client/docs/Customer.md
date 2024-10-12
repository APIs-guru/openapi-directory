# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city of address | [optional] 
**company_description** | **str** | The company Description | [optional] 
**company_name** | **str** | The company name of customer | 
**country** | **str** | The country of address | [optional] 
**face_recognition_type** | **str** | The facial recognition type of customer | 
**first_name** | **str** | The first name of customer | [optional] 
**last_name** | **str** | The last name of customer | [optional] 
**password** | **str** | The password of customer | 
**phone** | **str** | The mobile number | [optional] 
**state** | **str** | The state of customer | [optional] 
**street_address** | **str** | The street of address | [optional] 
**username** | **str** | The username of customer nothing but an email | 
**zip** | **str** | The zip code of address | [optional] 

## Example

```python
from openapi_client.models.customer import Customer

# TODO update the JSON string below
json = "{}"
# create an instance of Customer from a JSON string
customer_instance = Customer.from_json(json)
# print the JSON string representation of the object
print(Customer.to_json())

# convert the object into a dict
customer_dict = customer_instance.to_dict()
# create an instance of Customer from a dict
customer_from_dict = Customer.from_dict(customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


