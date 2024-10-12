# HealthCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checks** | [**List[HealthCheck]**](HealthCheck.md) |  | [optional] 
**commit** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | 
**status** | **str** |  | 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.health_check import HealthCheck

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheck from a JSON string
health_check_instance = HealthCheck.from_json(json)
# print the JSON string representation of the object
print(HealthCheck.to_json())

# convert the object into a dict
health_check_dict = health_check_instance.to_dict()
# create an instance of HealthCheck from a dict
health_check_from_dict = HealthCheck.from_dict(health_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


