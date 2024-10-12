# CustomerAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[CustomerAddAddressInner]**](CustomerAddAddressInner.md) |  | [optional] 
**birth_day** | **str** | Defines customer&#39;s birthday | [optional] 
**company** | **str** | Defines customer&#39;s company | [optional] 
**created_time** | **str** | Entity&#39;s date creation | [optional] 
**email** | **str** | Defines customer&#39;s email | 
**fax** | **str** | Defines customer&#39;s fax | [optional] 
**first_name** | **str** | Defines customer&#39;s first name | 
**gender** | **str** | Defines customer&#39;s gender | [optional] 
**group** | **str** | Defines the group where the customer | [optional] 
**last_login** | **str** | Defines customer&#39;s last login time | [optional] 
**last_name** | **str** | Defines customer&#39;s last name | 
**login** | **str** | Specifies customer&#39;s login name | [optional] 
**modified_time** | **str** | Entity&#39;s date modification | [optional] 
**news_letter_subscription** | **bool** | Defines whether the newsletter subscription is available for the user | [optional] [default to False]
**password** | **str** | Defines customer&#39;s unique password | [optional] 
**phone** | **str** | Defines customer&#39;s phone number | [optional] 
**status** | **str** | Defines customer&#39;s status | [optional] [default to 'enabled']
**store_id** | **str** | Store Id | [optional] 
**website** | **str** | Link to customer website | [optional] 

## Example

```python
from openapi_client.models.customer_add import CustomerAdd

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAdd from a JSON string
customer_add_instance = CustomerAdd.from_json(json)
# print the JSON string representation of the object
print(CustomerAdd.to_json())

# convert the object into a dict
customer_add_dict = customer_add_instance.to_dict()
# create an instance of CustomerAdd from a dict
customer_add_from_dict = CustomerAdd.from_dict(customer_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


