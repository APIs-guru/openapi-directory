# StringProperty

String property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | String property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.string_property import StringProperty

# TODO update the JSON string below
json = "{}"
# create an instance of StringProperty from a JSON string
string_property_instance = StringProperty.from_json(json)
# print the JSON string representation of the object
print(StringProperty.to_json())

# convert the object into a dict
string_property_dict = string_property_instance.to_dict()
# create an instance of StringProperty from a dict
string_property_from_dict = StringProperty.from_dict(string_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


