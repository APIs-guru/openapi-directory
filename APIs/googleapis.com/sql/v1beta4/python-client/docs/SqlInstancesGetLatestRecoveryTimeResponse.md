# SqlInstancesGetLatestRecoveryTimeResponse

Instance get latest recovery time response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#getLatestRecoveryTime&#x60;. | [optional] 
**latest_recovery_time** | **str** | Timestamp, identifies the latest recovery time of the source instance. | [optional] 

## Example

```python
from openapi_client.models.sql_instances_get_latest_recovery_time_response import SqlInstancesGetLatestRecoveryTimeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SqlInstancesGetLatestRecoveryTimeResponse from a JSON string
sql_instances_get_latest_recovery_time_response_instance = SqlInstancesGetLatestRecoveryTimeResponse.from_json(json)
# print the JSON string representation of the object
print(SqlInstancesGetLatestRecoveryTimeResponse.to_json())

# convert the object into a dict
sql_instances_get_latest_recovery_time_response_dict = sql_instances_get_latest_recovery_time_response_instance.to_dict()
# create an instance of SqlInstancesGetLatestRecoveryTimeResponse from a dict
sql_instances_get_latest_recovery_time_response_from_dict = SqlInstancesGetLatestRecoveryTimeResponse.from_dict(sql_instances_get_latest_recovery_time_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


