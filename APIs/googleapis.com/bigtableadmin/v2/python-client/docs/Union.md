# Union

A GcRule which deletes cells matching any of the given rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[GcRule]**](GcRule.md) | Delete cells which would be deleted by any element of &#x60;rules&#x60;. | [optional] 

## Example

```python
from openapi_client.models.union import Union

# TODO update the JSON string below
json = "{}"
# create an instance of Union from a JSON string
union_instance = Union.from_json(json)
# print the JSON string representation of the object
print(Union.to_json())

# convert the object into a dict
union_dict = union_instance.to_dict()
# create an instance of Union from a dict
union_from_dict = Union.from_dict(union_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


