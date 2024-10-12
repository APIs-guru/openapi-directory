# AdvanceRolloutRequest

The request object used by `AdvanceRollout`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phase_id** | **str** | Required. The phase ID to advance the &#x60;Rollout&#x60; to. | [optional] 

## Example

```python
from openapi_client.models.advance_rollout_request import AdvanceRolloutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdvanceRolloutRequest from a JSON string
advance_rollout_request_instance = AdvanceRolloutRequest.from_json(json)
# print the JSON string representation of the object
print(AdvanceRolloutRequest.to_json())

# convert the object into a dict
advance_rollout_request_dict = advance_rollout_request_instance.to_dict()
# create an instance of AdvanceRolloutRequest from a dict
advance_rollout_request_from_dict = AdvanceRolloutRequest.from_dict(advance_rollout_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


