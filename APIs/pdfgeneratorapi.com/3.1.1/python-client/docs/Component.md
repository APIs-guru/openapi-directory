# Component

Template component definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cls** | **str** | Defines component class/type | [optional] 
**data_index** | **str** | Defines data field for Table and Container components which are used to iterate over list of items | [optional] 
**height** | **float** | Height in units | [optional] 
**id** | **str** | Component id | [optional] 
**left** | **float** | Position from the page left in units | [optional] 
**top** | **float** | Position from the page top in units | [optional] 
**value** | **str** | Component value | [optional] 
**width** | **float** | Width in units | [optional] 
**zindex** | **int** | Defines the rendering order on page. Components with smaller zindex are rendered before | [optional] 

## Example

```python
from openapi_client.models.component import Component

# TODO update the JSON string below
json = "{}"
# create an instance of Component from a JSON string
component_instance = Component.from_json(json)
# print the JSON string representation of the object
print(Component.to_json())

# convert the object into a dict
component_dict = component_instance.to_dict()
# create an instance of Component from a dict
component_from_dict = Component.from_dict(component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


