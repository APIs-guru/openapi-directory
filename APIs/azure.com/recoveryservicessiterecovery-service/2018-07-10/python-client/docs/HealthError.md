# HealthError

Health Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time_utc** | **datetime** | Error creation time (UTC) | [optional] 
**customer_resolvability** | **str** | Value indicating whether the health error is customer resolvable. | [optional] 
**entity_id** | **str** | ID of the entity. | [optional] 
**error_category** | **str** | Category of error. | [optional] 
**error_code** | **str** | Error code. | [optional] 
**error_id** | **str** | The health error unique id. | [optional] 
**error_level** | **str** | Level of error. | [optional] 
**error_message** | **str** | Error message. | [optional] 
**error_source** | **str** | Source of error. | [optional] 
**error_type** | **str** | Type of error. | [optional] 
**inner_health_errors** | [**List[InnerHealthError]**](InnerHealthError.md) | The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&amp;gt; InnerException. | [optional] 
**possible_causes** | **str** | Possible causes of error. | [optional] 
**recommended_action** | **str** | Recommended action to resolve error. | [optional] 
**recovery_provider_error_message** | **str** | DRA error message. | [optional] 
**summary_message** | **str** | Summary message of the entity. | [optional] 

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


