# NamedRanges

A collection of all the NamedRanges in the document that share a given name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name that all the named ranges share. | [optional] 
**named_ranges** | [**List[NamedRange]**](NamedRange.md) | The NamedRanges that share the same name. | [optional] 

## Example

```python
from openapi_client.models.named_ranges import NamedRanges

# TODO update the JSON string below
json = "{}"
# create an instance of NamedRanges from a JSON string
named_ranges_instance = NamedRanges.from_json(json)
# print the JSON string representation of the object
print(NamedRanges.to_json())

# convert the object into a dict
named_ranges_dict = named_ranges_instance.to_dict()
# create an instance of NamedRanges from a dict
named_ranges_from_dict = NamedRanges.from_dict(named_ranges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


