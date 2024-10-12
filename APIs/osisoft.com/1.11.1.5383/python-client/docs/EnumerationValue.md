# EnumerationValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**EnumerationValueLinks**](EnumerationValueLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**serialize_description** | **bool** |  | [optional] 
**serialize_id** | **bool** |  | [optional] 
**serialize_links** | **bool** |  | [optional] 
**serialize_path** | **bool** |  | [optional] 
**serialize_web_id** | **bool** |  | [optional] 
**value** | **int** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enumeration_value import EnumerationValue

# TODO update the JSON string below
json = "{}"
# create an instance of EnumerationValue from a JSON string
enumeration_value_instance = EnumerationValue.from_json(json)
# print the JSON string representation of the object
print(EnumerationValue.to_json())

# convert the object into a dict
enumeration_value_dict = enumeration_value_instance.to_dict()
# create an instance of EnumerationValue from a dict
enumeration_value_from_dict = EnumerationValue.from_dict(enumeration_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


