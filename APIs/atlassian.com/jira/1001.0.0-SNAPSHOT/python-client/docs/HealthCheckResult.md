# HealthCheckResult

Jira instance health check results. Deprecated and no longer returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the Jira health check item. | [optional] 
**name** | **str** | The name of the Jira health check item. | [optional] 
**passed** | **bool** | Whether the Jira health check item passed or failed. | [optional] 

## Example

```python
from openapi_client.models.health_check_result import HealthCheckResult

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheckResult from a JSON string
health_check_result_instance = HealthCheckResult.from_json(json)
# print the JSON string representation of the object
print(HealthCheckResult.to_json())

# convert the object into a dict
health_check_result_dict = health_check_result_instance.to_dict()
# create an instance of HealthCheckResult from a dict
health_check_result_from_dict = HealthCheckResult.from_dict(health_check_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


