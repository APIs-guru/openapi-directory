# EnterpriseCrmEventbusStats

Stats for the requested dimensions: QPS, duration, and error/warning rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**EnterpriseCrmEventbusStatsDimensions**](EnterpriseCrmEventbusStatsDimensions.md) |  | [optional] 
**duration_in_seconds** | **float** | Average duration in seconds. | [optional] 
**error_rate** | **float** | Average error rate. | [optional] 
**qps** | **float** | Queries per second. | [optional] 
**warning_rate** | **float** | Average warning rate. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_stats import EnterpriseCrmEventbusStats

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusStats from a JSON string
enterprise_crm_eventbus_stats_instance = EnterpriseCrmEventbusStats.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusStats.to_json())

# convert the object into a dict
enterprise_crm_eventbus_stats_dict = enterprise_crm_eventbus_stats_instance.to_dict()
# create an instance of EnterpriseCrmEventbusStats from a dict
enterprise_crm_eventbus_stats_from_dict = EnterpriseCrmEventbusStats.from_dict(enterprise_crm_eventbus_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


