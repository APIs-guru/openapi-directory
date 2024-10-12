# CustomerSessionStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**search_sessions_count** | **str** | The count of search sessions on the day | [optional] 

## Example

```python
from openapi_client.models.customer_session_stats import CustomerSessionStats

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSessionStats from a JSON string
customer_session_stats_instance = CustomerSessionStats.from_json(json)
# print the JSON string representation of the object
print(CustomerSessionStats.to_json())

# convert the object into a dict
customer_session_stats_dict = customer_session_stats_instance.to_dict()
# create an instance of CustomerSessionStats from a dict
customer_session_stats_from_dict = CustomerSessionStats.from_dict(customer_session_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


