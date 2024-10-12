# CollapsibleGroup

A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collapsed** | **bool** | The collapsed state of the widget on first page load. | [optional] 

## Example

```python
from openapi_client.models.collapsible_group import CollapsibleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CollapsibleGroup from a JSON string
collapsible_group_instance = CollapsibleGroup.from_json(json)
# print the JSON string representation of the object
print(CollapsibleGroup.to_json())

# convert the object into a dict
collapsible_group_dict = collapsible_group_instance.to_dict()
# create an instance of CollapsibleGroup from a dict
collapsible_group_from_dict = CollapsibleGroup.from_dict(collapsible_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


