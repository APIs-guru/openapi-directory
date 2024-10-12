# NamedRange

A named range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the named range. | [optional] 
**named_range_id** | **str** | The ID of the named range. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 

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


