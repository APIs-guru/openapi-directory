# FieldReference

Reference definition to use with field overrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_format** | **str** | Only valid if the &#x60;fieldPath&#x60; references a date field. Chooses how the date field will be formatted and displayed in the UI. | [optional] 
**field_path** | **str** | Path to the field being referenced, prefixed with \&quot;object\&quot; or \&quot;class\&quot; and separated with dots. For example, it may be the string \&quot;object.purchaseDetails.purchasePrice\&quot;. | [optional] 

## Example

```python
from openapi_client.models.field_reference import FieldReference

# TODO update the JSON string below
json = "{}"
# create an instance of FieldReference from a JSON string
field_reference_instance = FieldReference.from_json(json)
# print the JSON string representation of the object
print(FieldReference.to_json())

# convert the object into a dict
field_reference_dict = field_reference_instance.to_dict()
# create an instance of FieldReference from a dict
field_reference_from_dict = FieldReference.from_dict(field_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


