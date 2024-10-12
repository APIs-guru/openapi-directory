# RevertInstanceRequest

RevertInstanceRequest reverts the given instance's file share to the specified snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_snapshot_id** | **str** | Required. The snapshot resource ID, in the format &#39;my-snapshot&#39;, where the specified ID is the {snapshot_id} of the fully qualified name like &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.revert_instance_request import RevertInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RevertInstanceRequest from a JSON string
revert_instance_request_instance = RevertInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(RevertInstanceRequest.to_json())

# convert the object into a dict
revert_instance_request_dict = revert_instance_request_instance.to_dict()
# create an instance of RevertInstanceRequest from a dict
revert_instance_request_from_dict = RevertInstanceRequest.from_dict(revert_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


