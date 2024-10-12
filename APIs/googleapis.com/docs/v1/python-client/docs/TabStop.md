# TabStop

A tab stop within a paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **str** | The alignment of this tab stop. If unset, the value defaults to START. | [optional] 
**offset** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.tab_stop import TabStop

# TODO update the JSON string below
json = "{}"
# create an instance of TabStop from a JSON string
tab_stop_instance = TabStop.from_json(json)
# print the JSON string representation of the object
print(TabStop.to_json())

# convert the object into a dict
tab_stop_dict = tab_stop_instance.to_dict()
# create an instance of TabStop from a dict
tab_stop_from_dict = TabStop.from_dict(tab_stop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


