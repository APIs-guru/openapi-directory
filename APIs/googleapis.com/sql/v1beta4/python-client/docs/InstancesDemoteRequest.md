# InstancesDemoteRequest

This request is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**demote_context** | [**DemoteContext**](DemoteContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_demote_request import InstancesDemoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesDemoteRequest from a JSON string
instances_demote_request_instance = InstancesDemoteRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesDemoteRequest.to_json())

# convert the object into a dict
instances_demote_request_dict = instances_demote_request_instance.to_dict()
# create an instance of InstancesDemoteRequest from a dict
instances_demote_request_from_dict = InstancesDemoteRequest.from_dict(instances_demote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


