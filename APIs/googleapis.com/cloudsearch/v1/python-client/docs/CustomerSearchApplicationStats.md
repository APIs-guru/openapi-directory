# CustomerSearchApplicationStats

Search application stats for a customer for the given date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The count of search applications for the date. | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_search_application_stats import CustomerSearchApplicationStats

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSearchApplicationStats from a JSON string
customer_search_application_stats_instance = CustomerSearchApplicationStats.from_json(json)
# print the JSON string representation of the object
print(CustomerSearchApplicationStats.to_json())

# convert the object into a dict
customer_search_application_stats_dict = customer_search_application_stats_instance.to_dict()
# create an instance of CustomerSearchApplicationStats from a dict
customer_search_application_stats_from_dict = CustomerSearchApplicationStats.from_dict(customer_search_application_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


