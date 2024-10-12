# ApproveRolloutRequest

The request object used by `ApproveRollout`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Required. True &#x3D; approve; false &#x3D; reject | [optional] 

## Example

```python
from openapi_client.models.approve_rollout_request import ApproveRolloutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApproveRolloutRequest from a JSON string
approve_rollout_request_instance = ApproveRolloutRequest.from_json(json)
# print the JSON string representation of the object
print(ApproveRolloutRequest.to_json())

# convert the object into a dict
approve_rollout_request_dict = approve_rollout_request_instance.to_dict()
# create an instance of ApproveRolloutRequest from a dict
approve_rollout_request_from_dict = ApproveRolloutRequest.from_dict(approve_rollout_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


