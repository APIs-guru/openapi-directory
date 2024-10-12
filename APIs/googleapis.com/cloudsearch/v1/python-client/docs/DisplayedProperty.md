# DisplayedProperty

A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_name** | **str** | The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema. | [optional] 

## Example

```python
from openapi_client.models.displayed_property import DisplayedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayedProperty from a JSON string
displayed_property_instance = DisplayedProperty.from_json(json)
# print the JSON string representation of the object
print(DisplayedProperty.to_json())

# convert the object into a dict
displayed_property_dict = displayed_property_instance.to_dict()
# create an instance of DisplayedProperty from a dict
displayed_property_from_dict = DisplayedProperty.from_dict(displayed_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


