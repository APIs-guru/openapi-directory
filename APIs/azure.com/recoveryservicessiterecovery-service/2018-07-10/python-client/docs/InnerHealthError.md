# InnerHealthError

Implements InnerHealthError class. HealthError object has a list of InnerHealthErrors as child errors. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time_utc** | **datetime** | Error creation time (UTC) | [optional] 
**entity_id** | **str** | ID of the entity. | [optional] 
**error_category** | **str** | Category of error. | [optional] 
**error_code** | **str** | Error code. | [optional] 
**error_level** | **str** | Level of error. | [optional] 
**error_message** | **str** | Error message. | [optional] 
**error_source** | **str** | Source of error. | [optional] 
**error_type** | **str** | Type of error. | [optional] 
**possible_causes** | **str** | Possible causes of error. | [optional] 
**recommended_action** | **str** | Recommended action to resolve error. | [optional] 
**recovery_provider_error_message** | **str** | DRA error message. | [optional] 
**summary_message** | **str** | Summary message of the entity. | [optional] 

## Example

```python
from openapi_client.models.inner_health_error import InnerHealthError

# TODO update the JSON string below
json = "{}"
# create an instance of InnerHealthError from a JSON string
inner_health_error_instance = InnerHealthError.from_json(json)
# print the JSON string representation of the object
print(InnerHealthError.to_json())

# convert the object into a dict
inner_health_error_dict = inner_health_error_instance.to_dict()
# create an instance of InnerHealthError from a dict
inner_health_error_from_dict = InnerHealthError.from_dict(inner_health_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


