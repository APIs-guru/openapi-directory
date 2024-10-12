# CreativeDisapprovalReasonsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **List[str]** | Additional details about the reason for disapproval. | [optional] 
**reason** | **str** | The categorized reason for disapproval. | [optional] 

## Example

```python
from openapi_client.models.creative_disapproval_reasons_inner import CreativeDisapprovalReasonsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeDisapprovalReasonsInner from a JSON string
creative_disapproval_reasons_inner_instance = CreativeDisapprovalReasonsInner.from_json(json)
# print the JSON string representation of the object
print(CreativeDisapprovalReasonsInner.to_json())

# convert the object into a dict
creative_disapproval_reasons_inner_dict = creative_disapproval_reasons_inner_instance.to_dict()
# create an instance of CreativeDisapprovalReasonsInner from a dict
creative_disapproval_reasons_inner_from_dict = CreativeDisapprovalReasonsInner.from_dict(creative_disapproval_reasons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


