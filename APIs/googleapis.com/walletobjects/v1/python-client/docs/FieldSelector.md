# FieldSelector

Custom field selector to use with field overrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[FieldReference]**](FieldReference.md) | If more than one reference is supplied, then the first one that references a non-empty field will be displayed. | [optional] 

## Example

```python
from openapi_client.models.field_selector import FieldSelector

# TODO update the JSON string below
json = "{}"
# create an instance of FieldSelector from a JSON string
field_selector_instance = FieldSelector.from_json(json)
# print the JSON string representation of the object
print(FieldSelector.to_json())

# convert the object into a dict
field_selector_dict = field_selector_instance.to_dict()
# create an instance of FieldSelector from a dict
field_selector_from_dict = FieldSelector.from_dict(field_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


