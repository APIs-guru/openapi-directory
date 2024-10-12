# EnvironmentStatus

An object that represents the status of the environment, and its internal state in the Time Series Insights service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress** | [**IngressEnvironmentStatus**](IngressEnvironmentStatus.md) |  | [optional] 
**warm_storage** | [**WarmStorageEnvironmentStatus**](WarmStorageEnvironmentStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_status import EnvironmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentStatus from a JSON string
environment_status_instance = EnvironmentStatus.from_json(json)
# print the JSON string representation of the object
print(EnvironmentStatus.to_json())

# convert the object into a dict
environment_status_dict = environment_status_instance.to_dict()
# create an instance of EnvironmentStatus from a dict
environment_status_from_dict = EnvironmentStatus.from_dict(environment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


