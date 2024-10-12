# ProtectedRange

A protected range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this protected range. | [optional] 
**editors** | [**Editors**](Editors.md) |  | [optional] 
**named_range_id** | **str** | The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set. | [optional] 
**protected_range_id** | **int** | The ID of the protected range. This field is read-only. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**requesting_user_can_edit** | **bool** | True if the user who requested this protected range can edit the protected area. This field is read-only. | [optional] 
**unprotected_ranges** | [**List[GridRange]**](GridRange.md) | The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets. | [optional] 
**warning_only** | **bool** | True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors are ignored. Additionally, if this field is changed from true to false and the &#x60;editors&#x60; field is not set (nor included in the field mask), then the editors will be set to all the editors in the document. | [optional] 

## Example

```python
from openapi_client.models.protected_range import ProtectedRange

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedRange from a JSON string
protected_range_instance = ProtectedRange.from_json(json)
# print the JSON string representation of the object
print(ProtectedRange.to_json())

# convert the object into a dict
protected_range_dict = protected_range_instance.to_dict()
# create an instance of ProtectedRange from a dict
protected_range_from_dict = ProtectedRange.from_dict(protected_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


