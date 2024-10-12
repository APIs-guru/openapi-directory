# ApproveDecision

A decision that has been made to approve access to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approve_time** | **str** | The time at which approval was granted. | [optional] 
**auto_approved** | **bool** | True when the request has been auto-approved. | [optional] 
**expire_time** | **str** | The time at which the approval expires. | [optional] 
**invalidate_time** | **str** | If set, denotes the timestamp at which the approval is invalidated. | [optional] 
**signature_info** | [**SignatureInfo**](SignatureInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.approve_decision import ApproveDecision

# TODO update the JSON string below
json = "{}"
# create an instance of ApproveDecision from a JSON string
approve_decision_instance = ApproveDecision.from_json(json)
# print the JSON string representation of the object
print(ApproveDecision.to_json())

# convert the object into a dict
approve_decision_dict = approve_decision_instance.to_dict()
# create an instance of ApproveDecision from a dict
approve_decision_from_dict = ApproveDecision.from_dict(approve_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


