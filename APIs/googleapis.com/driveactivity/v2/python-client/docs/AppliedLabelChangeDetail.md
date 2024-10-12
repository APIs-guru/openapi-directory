# AppliedLabelChangeDetail

A change made to a Label on the Target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_changes** | [**List[FieldValueChange]**](FieldValueChange.md) | Field Changes. Only present if &#x60;types&#x60; contains &#x60;LABEL_FIELD_VALUE_CHANGED&#x60;. | [optional] 
**label** | **str** | The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is &#x60;labels/id@revision&#x60;. | [optional] 
**title** | **str** | The human-readable title of the label that changed. | [optional] 
**types** | **List[str]** | The types of changes made to the Label on the Target. | [optional] 

## Example

```python
from openapi_client.models.applied_label_change_detail import AppliedLabelChangeDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedLabelChangeDetail from a JSON string
applied_label_change_detail_instance = AppliedLabelChangeDetail.from_json(json)
# print the JSON string representation of the object
print(AppliedLabelChangeDetail.to_json())

# convert the object into a dict
applied_label_change_detail_dict = applied_label_change_detail_instance.to_dict()
# create an instance of AppliedLabelChangeDetail from a dict
applied_label_change_detail_from_dict = AppliedLabelChangeDetail.from_dict(applied_label_change_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


