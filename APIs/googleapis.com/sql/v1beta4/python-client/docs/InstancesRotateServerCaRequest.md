# InstancesRotateServerCaRequest

Rotate Server CA request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rotate_server_ca_context** | [**RotateServerCaContext**](RotateServerCaContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_rotate_server_ca_request import InstancesRotateServerCaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesRotateServerCaRequest from a JSON string
instances_rotate_server_ca_request_instance = InstancesRotateServerCaRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesRotateServerCaRequest.to_json())

# convert the object into a dict
instances_rotate_server_ca_request_dict = instances_rotate_server_ca_request_instance.to_dict()
# create an instance of InstancesRotateServerCaRequest from a dict
instances_rotate_server_ca_request_from_dict = InstancesRotateServerCaRequest.from_dict(instances_rotate_server_ca_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


