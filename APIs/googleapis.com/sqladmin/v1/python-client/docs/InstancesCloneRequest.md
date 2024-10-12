# InstancesCloneRequest

Database instance clone request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clone_context** | [**CloneContext**](CloneContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_clone_request import InstancesCloneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesCloneRequest from a JSON string
instances_clone_request_instance = InstancesCloneRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesCloneRequest.to_json())

# convert the object into a dict
instances_clone_request_dict = instances_clone_request_instance.to_dict()
# create an instance of InstancesCloneRequest from a dict
instances_clone_request_from_dict = InstancesCloneRequest.from_dict(instances_clone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


