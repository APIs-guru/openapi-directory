# Approval

Request content object, in the use of Approve or Deny a Lockbox request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | **str** | Approval decision to the Lockbox request. | [optional] 
**reason** | **str** | Reason of the decision | [optional] 

## Example

```python
from openapi_client.models.approval import Approval

# TODO update the JSON string below
json = "{}"
# create an instance of Approval from a JSON string
approval_instance = Approval.from_json(json)
# print the JSON string representation of the object
print(Approval.to_json())

# convert the object into a dict
approval_dict = approval_instance.to_dict()
# create an instance of Approval from a dict
approval_from_dict = Approval.from_dict(approval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


