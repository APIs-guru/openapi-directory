# ScriptDescriptionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**script_type** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.script_description_data import ScriptDescriptionData

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptDescriptionData from a JSON string
script_description_data_instance = ScriptDescriptionData.from_json(json)
# print the JSON string representation of the object
print(ScriptDescriptionData.to_json())

# convert the object into a dict
script_description_data_dict = script_description_data_instance.to_dict()
# create an instance of ScriptDescriptionData from a dict
script_description_data_from_dict = ScriptDescriptionData.from_dict(script_description_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


