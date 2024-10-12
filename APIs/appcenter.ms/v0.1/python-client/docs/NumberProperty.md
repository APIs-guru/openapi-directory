# NumberProperty

Number property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Number property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.number_property import NumberProperty

# TODO update the JSON string below
json = "{}"
# create an instance of NumberProperty from a JSON string
number_property_instance = NumberProperty.from_json(json)
# print the JSON string representation of the object
print(NumberProperty.to_json())

# convert the object into a dict
number_property_dict = number_property_instance.to_dict()
# create an instance of NumberProperty from a dict
number_property_from_dict = NumberProperty.from_dict(number_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


