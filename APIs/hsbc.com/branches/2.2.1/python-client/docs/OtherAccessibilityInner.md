# OtherAccessibilityInner

Enter any new code , name and description for any other Accessibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_accessibility_inner import OtherAccessibilityInner

# TODO update the JSON string below
json = "{}"
# create an instance of OtherAccessibilityInner from a JSON string
other_accessibility_inner_instance = OtherAccessibilityInner.from_json(json)
# print the JSON string representation of the object
print(OtherAccessibilityInner.to_json())

# convert the object into a dict
other_accessibility_inner_dict = other_accessibility_inner_instance.to_dict()
# create an instance of OtherAccessibilityInner from a dict
other_accessibility_inner_from_dict = OtherAccessibilityInner.from_dict(other_accessibility_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


