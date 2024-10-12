# Script


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**event** | **str** |  | [optional] 
**html** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**load_method** | **str** |  | [optional] 
**modified_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**name** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 
**src** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.script import Script

# TODO update the JSON string below
json = "{}"
# create an instance of Script from a JSON string
script_instance = Script.from_json(json)
# print the JSON string representation of the object
print(Script.to_json())

# convert the object into a dict
script_dict = script_instance.to_dict()
# create an instance of Script from a dict
script_from_dict = Script.from_dict(script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


