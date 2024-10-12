# HealthCheck1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | **str** | The health checks&#39; info | [optional] 
**version** | **str** | The health checks&#39; version | [optional] 

## Example

```python
from openapi_client.models.health_check1 import HealthCheck1

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheck1 from a JSON string
health_check1_instance = HealthCheck1.from_json(json)
# print the JSON string representation of the object
print(HealthCheck1.to_json())

# convert the object into a dict
health_check1_dict = health_check1_instance.to_dict()
# create an instance of HealthCheck1 from a dict
health_check1_from_dict = HealthCheck1.from_dict(health_check1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


