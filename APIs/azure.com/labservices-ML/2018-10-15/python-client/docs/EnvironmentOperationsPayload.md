# EnvironmentOperationsPayload

Represents payload for any Environment operations like get, start, stop, connect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_id** | **str** | The resourceId of the environment | 

## Example

```python
from openapi_client.models.environment_operations_payload import EnvironmentOperationsPayload

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentOperationsPayload from a JSON string
environment_operations_payload_instance = EnvironmentOperationsPayload.from_json(json)
# print the JSON string representation of the object
print(EnvironmentOperationsPayload.to_json())

# convert the object into a dict
environment_operations_payload_dict = environment_operations_payload_instance.to_dict()
# create an instance of EnvironmentOperationsPayload from a dict
environment_operations_payload_from_dict = EnvironmentOperationsPayload.from_dict(environment_operations_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


