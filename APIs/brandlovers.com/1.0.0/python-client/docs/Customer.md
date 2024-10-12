# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_number** | **str** | Customer tax information | 
**email** | **str** | Customer Email (when available). Please note: Email is not a mandatory field | [optional] 
**id** | **str** | Customer unqiue Id | 
**name** | **str** | Customer Name | 
**phones** | [**List[Phone]**](Phone.md) | Customer phone number | 
**type** | **str** | Customer type: Enterprise or Consumer | 

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


