# ReplicasDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abandon_instance** | **bool** | Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica. | [optional] 

## Example

```python
from openapi_client.models.replicas_delete_request import ReplicasDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicasDeleteRequest from a JSON string
replicas_delete_request_instance = ReplicasDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(ReplicasDeleteRequest.to_json())

# convert the object into a dict
replicas_delete_request_dict = replicas_delete_request_instance.to_dict()
# create an instance of ReplicasDeleteRequest from a dict
replicas_delete_request_from_dict = ReplicasDeleteRequest.from_dict(replicas_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


