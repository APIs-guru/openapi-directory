# CreativeCorrectionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[CreativeCorrectionsInnerContextsInner]**](CreativeCorrectionsInnerContextsInner.md) | All known serving contexts containing serving status information. | [optional] 
**details** | **List[str]** | Additional details about the correction. | [optional] 
**reason** | **str** | The type of correction that was applied to the creative. | [optional] 

## Example

```python
from openapi_client.models.creative_corrections_inner import CreativeCorrectionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeCorrectionsInner from a JSON string
creative_corrections_inner_instance = CreativeCorrectionsInner.from_json(json)
# print the JSON string representation of the object
print(CreativeCorrectionsInner.to_json())

# convert the object into a dict
creative_corrections_inner_dict = creative_corrections_inner_instance.to_dict()
# create an instance of CreativeCorrectionsInner from a dict
creative_corrections_inner_from_dict = CreativeCorrectionsInner.from_dict(creative_corrections_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


