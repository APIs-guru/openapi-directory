# CustomersFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | Company Name of customer to search for | [optional] 
**display_name** | **str** | Display Name of customer to search for | [optional] 
**email** | **str** | Email of customer to search for | [optional] 
**first_name** | **str** | First name of customer to search for | [optional] 
**last_name** | **str** | Last name of customer to search for | [optional] 
**status** | **str** | Status of customer to filter on | [optional] 

## Example

```python
from openapi_client.models.customers_filter import CustomersFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CustomersFilter from a JSON string
customers_filter_instance = CustomersFilter.from_json(json)
# print the JSON string representation of the object
print(CustomersFilter.to_json())

# convert the object into a dict
customers_filter_dict = customers_filter_instance.to_dict()
# create an instance of CustomersFilter from a dict
customers_filter_from_dict = CustomersFilter.from_dict(customers_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


