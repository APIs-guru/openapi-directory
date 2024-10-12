# CustomerUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[CustomerUpdateAddressInner]**](CustomerUpdateAddressInner.md) |  | [optional] 
**email** | **str** | Defines customer&#39;s email | [optional] 
**first_name** | **str** | Defines customer&#39;s first name | [optional] 
**group_id** | **str** | Customer group_id | [optional] 
**group_ids** | **str** | Groups that will be assigned to a customer | [optional] 
**id** | **str** | Entity id | [optional] 
**last_name** | **str** | Defines customer&#39;s last name | [optional] 
**news_letter_subscription** | **bool** | Defines whether the newsletter subscription is available for the user | [optional] 
**phone** | **str** | Defines customer&#39;s phone number | [optional] 
**tags** | **str** | Customer tags | [optional] 

## Example

```python
from openapi_client.models.customer_update import CustomerUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUpdate from a JSON string
customer_update_instance = CustomerUpdate.from_json(json)
# print the JSON string representation of the object
print(CustomerUpdate.to_json())

# convert the object into a dict
customer_update_dict = customer_update_instance.to_dict()
# create an instance of CustomerUpdate from a dict
customer_update_from_dict = CustomerUpdate.from_dict(customer_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


