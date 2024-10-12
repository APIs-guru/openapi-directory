# RollbackTargetRequest

The request object for `RollbackTarget`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_id** | **str** | Optional. ID of the &#x60;Release&#x60; to roll back to. If this isn&#39;t specified, the previous successful &#x60;Rollout&#x60; to the specified target will be used to determine the &#x60;Release&#x60;. | [optional] 
**rollback_config** | [**RollbackTargetConfig**](RollbackTargetConfig.md) |  | [optional] 
**rollout_id** | **str** | Required. ID of the rollback &#x60;Rollout&#x60; to create. | [optional] 
**rollout_to_roll_back** | **str** | Optional. If provided, this must be the latest &#x60;Rollout&#x60; that is on the &#x60;Target&#x60;. | [optional] 
**target_id** | **str** | Required. ID of the &#x60;Target&#x60; that is being rolled back. | [optional] 
**validate_only** | **bool** | Optional. If set to true, the request is validated and the user is provided with a &#x60;RollbackTargetResponse&#x60;. | [optional] 

## Example

```python
from openapi_client.models.rollback_target_request import RollbackTargetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackTargetRequest from a JSON string
rollback_target_request_instance = RollbackTargetRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackTargetRequest.to_json())

# convert the object into a dict
rollback_target_request_dict = rollback_target_request_instance.to_dict()
# create an instance of RollbackTargetRequest from a dict
rollback_target_request_from_dict = RollbackTargetRequest.from_dict(rollback_target_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


