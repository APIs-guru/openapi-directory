# RollbackInstanceRequest

Request for rollbacking a notebook instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision_id** | **str** | Required. Output only. Revision Id | [optional] [readonly] 
**target_snapshot** | **str** | Required. The snapshot for rollback. Example: \&quot;projects/test-project/global/snapshots/krwlzipynril\&quot;. | [optional] 

## Example

```python
from openapi_client.models.rollback_instance_request import RollbackInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackInstanceRequest from a JSON string
rollback_instance_request_instance = RollbackInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackInstanceRequest.to_json())

# convert the object into a dict
rollback_instance_request_dict = rollback_instance_request_instance.to_dict()
# create an instance of RollbackInstanceRequest from a dict
rollback_instance_request_from_dict = RollbackInstanceRequest.from_dict(rollback_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


