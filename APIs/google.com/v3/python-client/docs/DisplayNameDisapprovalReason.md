# DisplayNameDisapprovalReason

Disapproval reason of the display name in a specific language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disapproval_reason** | **str** | Disapproval reason. | [optional] 
**language_code** | **str** | Language of the disapproved display name. | [optional] 

## Example

```python
from openapi_client.models.display_name_disapproval_reason import DisplayNameDisapprovalReason

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayNameDisapprovalReason from a JSON string
display_name_disapproval_reason_instance = DisplayNameDisapprovalReason.from_json(json)
# print the JSON string representation of the object
print(DisplayNameDisapprovalReason.to_json())

# convert the object into a dict
display_name_disapproval_reason_dict = display_name_disapproval_reason_instance.to_dict()
# create an instance of DisplayNameDisapprovalReason from a dict
display_name_disapproval_reason_from_dict = DisplayNameDisapprovalReason.from_dict(display_name_disapproval_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


