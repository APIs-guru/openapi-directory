# ListProperties

The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nesting_levels** | [**List[NestingLevel]**](NestingLevel.md) | Describes the properties of the bullets at the associated level. A list has at most 9 levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first. | [optional] 

## Example

```python
from openapi_client.models.list_properties import ListProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ListProperties from a JSON string
list_properties_instance = ListProperties.from_json(json)
# print the JSON string representation of the object
print(ListProperties.to_json())

# convert the object into a dict
list_properties_dict = list_properties_instance.to_dict()
# create an instance of ListProperties from a dict
list_properties_from_dict = ListProperties.from_dict(list_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


