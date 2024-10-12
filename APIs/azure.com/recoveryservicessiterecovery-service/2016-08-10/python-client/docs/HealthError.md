# HealthError

Health Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_errors** | [**List[HealthError]**](HealthError.md) | The child health errors. | [optional] 
**creation_time_utc** | **datetime** | Error creation time (UTC) | [optional] 
**entity_id** | **str** | ID of the entity. | [optional] 
**error_code** | **str** | Error code. | [optional] 
**error_level** | **str** | Level of error. | [optional] 
**error_message** | **str** | Error message. | [optional] 
**error_source** | **str** | Source of error. | [optional] 
**error_type** | **str** | Type of error. | [optional] 
**possible_causes** | **str** | Possible causes of error. | [optional] 
**recommended_action** | **str** | Recommended action to resolve error. | [optional] 
**recovery_provider_error_message** | **str** | DRA error message. | [optional] 

## Example

```python
from openapi_client.models.health_error import HealthError

# TODO update the JSON string below
json = "{}"
# create an instance of HealthError from a JSON string
health_error_instance = HealthError.from_json(json)
# print the JSON string representation of the object
print(HealthError.to_json())

# convert the object into a dict
health_error_dict = health_error_instance.to_dict()
# create an instance of HealthError from a dict
health_error_from_dict = HealthError.from_dict(health_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


