# HealthCheckEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**me** | [**OwnUser**](OwnUser.md) |  | [optional] 
**type** | **str** |  | [default to 'health.check']

## Example

```python
from openapi_client.models.health_check_event import HealthCheckEvent

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheckEvent from a JSON string
health_check_event_instance = HealthCheckEvent.from_json(json)
# print the JSON string representation of the object
print(HealthCheckEvent.to_json())

# convert the object into a dict
health_check_event_dict = health_check_event_instance.to_dict()
# create an instance of HealthCheckEvent from a dict
health_check_event_from_dict = HealthCheckEvent.from_dict(health_check_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


