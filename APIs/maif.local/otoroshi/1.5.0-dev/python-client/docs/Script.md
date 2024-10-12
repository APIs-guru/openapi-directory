# Script

A script to transformer otoroshi requests 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **Dict[str, str]** | The code of the script | 
**desc** | **Dict[str, str]** | The description of the script | 
**id** | **str** | The id of the script | 
**name** | **str** | The name of the script | 

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


