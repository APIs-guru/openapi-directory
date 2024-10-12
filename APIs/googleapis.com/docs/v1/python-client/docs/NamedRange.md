# NamedRange

A collection of Ranges with the same named range ID. Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited later. A document can contain multiple named ranges with the same name, but every named range has a unique ID. A named range is created with a single Range, and content inserted inside a named range generally expands that range. However, certain document changes can cause the range to be split into multiple ranges. Named ranges are not private. All applications and collaborators that have access to the document can see its named ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the named range. | [optional] 
**named_range_id** | **str** | The ID of the named range. | [optional] 
**ranges** | [**List[Range]**](Range.md) | The ranges that belong to this named range. | [optional] 

## Example

```python
from openapi_client.models.named_range import NamedRange

# TODO update the JSON string below
json = "{}"
# create an instance of NamedRange from a JSON string
named_range_instance = NamedRange.from_json(json)
# print the JSON string representation of the object
print(NamedRange.to_json())

# convert the object into a dict
named_range_dict = named_range_instance.to_dict()
# create an instance of NamedRange from a dict
named_range_from_dict = NamedRange.from_dict(named_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


