# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**address_book** | [**List[CustomerAddress]**](CustomerAddress.md) |  | [optional] 
**birth_day** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**company** | **str** |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**email** | **str** |  | [optional] 
**fax** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**group** | [**List[CustomerGroup]**](CustomerGroup.md) |  | [optional] 
**id** | **str** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**lang_id** | **str** |  | [optional] 
**last_login** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**last_name** | **str** |  | [optional] 
**last_order_id** | **str** |  | [optional] 
**login** | **str** |  | [optional] 
**modified_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**news_letter_subscription** | **bool** |  | [optional] 
**orders_count** | **int** |  | [optional] 
**phone** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**stores_ids** | **List[str]** |  | [optional] 
**website** | **str** |  | [optional] 

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


