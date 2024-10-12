# FieldReference

A reference to a field in a document, ex: `stats.operations`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path** | **str** | A reference to a field in a document. Requires: * MUST be a dot-delimited (&#x60;.&#x60;) string of segments, where each segment conforms to document field name limitations. | [optional] 

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


