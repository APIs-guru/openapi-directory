# DismissDecision

A decision that has been made to dismiss an approval request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dismiss_time** | **str** | The time at which the approval request was dismissed. | [optional] 
**implicit** | **bool** | This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time). | [optional] 

## Example

```python
from openapi_client.models.dismiss_decision import DismissDecision

# TODO update the JSON string below
json = "{}"
# create an instance of DismissDecision from a JSON string
dismiss_decision_instance = DismissDecision.from_json(json)
# print the JSON string representation of the object
print(DismissDecision.to_json())

# convert the object into a dict
dismiss_decision_dict = dismiss_decision_instance.to_dict()
# create an instance of DismissDecision from a dict
dismiss_decision_from_dict = DismissDecision.from_dict(dismiss_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


