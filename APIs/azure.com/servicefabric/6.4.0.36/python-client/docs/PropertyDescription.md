# PropertyDescription

Description of a Service Fabric property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type_id** | **str** | The property&#39;s custom type ID. Using this property, the user is able to tag the type of the value of the property. | [optional] 
**property_name** | **str** | The name of the Service Fabric property. | 
**value** | [**PropertyValue**](PropertyValue.md) |  | 

## Example

```python
from openapi_client.models.property_description import PropertyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyDescription from a JSON string
property_description_instance = PropertyDescription.from_json(json)
# print the JSON string representation of the object
print(PropertyDescription.to_json())

# convert the object into a dict
property_description_dict = property_description_instance.to_dict()
# create an instance of PropertyDescription from a dict
property_description_from_dict = PropertyDescription.from_dict(property_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


