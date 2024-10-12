# SwitchDetailsCustomerDetailsName

Name of customer switching

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** | Customer&#39;s first name | 
**last** | **str** | Customer&#39;s last name | 
**middle** | **str** | Customer&#39;s middle name | [optional] 
**title** | **str** | Customers title (e.g. Mr, Mrs, Miss, Dr) | 

## Example

```python
from openapi_client.models.switch_details_customer_details_name import SwitchDetailsCustomerDetailsName

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchDetailsCustomerDetailsName from a JSON string
switch_details_customer_details_name_instance = SwitchDetailsCustomerDetailsName.from_json(json)
# print the JSON string representation of the object
print(SwitchDetailsCustomerDetailsName.to_json())

# convert the object into a dict
switch_details_customer_details_name_dict = switch_details_customer_details_name_instance.to_dict()
# create an instance of SwitchDetailsCustomerDetailsName from a dict
switch_details_customer_details_name_from_dict = SwitchDetailsCustomerDetailsName.from_dict(switch_details_customer_details_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


