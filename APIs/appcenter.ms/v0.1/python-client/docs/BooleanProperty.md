# BooleanProperty

Boolean property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **bool** | Boolean property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.boolean_property import BooleanProperty

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanProperty from a JSON string
boolean_property_instance = BooleanProperty.from_json(json)
# print the JSON string representation of the object
print(BooleanProperty.to_json())

# convert the object into a dict
boolean_property_dict = boolean_property_instance.to_dict()
# create an instance of BooleanProperty from a dict
boolean_property_from_dict = BooleanProperty.from_dict(boolean_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


