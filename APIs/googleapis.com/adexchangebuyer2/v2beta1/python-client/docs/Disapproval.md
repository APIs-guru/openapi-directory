# Disapproval

Output only. The reason and details for a disapproval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **List[str]** | Additional details about the reason for disapproval. | [optional] 
**reason** | **str** | The categorized reason for disapproval. | [optional] 

## Example

```python
from openapi_client.models.disapproval import Disapproval

# TODO update the JSON string below
json = "{}"
# create an instance of Disapproval from a JSON string
disapproval_instance = Disapproval.from_json(json)
# print the JSON string representation of the object
print(Disapproval.to_json())

# convert the object into a dict
disapproval_dict = disapproval_instance.to_dict()
# create an instance of Disapproval from a dict
disapproval_from_dict = Disapproval.from_dict(disapproval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


