# ScriptInstanceCustomUserData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_script_description** | **str** |  | [optional] 
**custom_script_name** | **str** |  | [optional] 
**instance_id** | **str** |  | [optional] 
**script_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.script_instance_custom_user_data import ScriptInstanceCustomUserData

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptInstanceCustomUserData from a JSON string
script_instance_custom_user_data_instance = ScriptInstanceCustomUserData.from_json(json)
# print the JSON string representation of the object
print(ScriptInstanceCustomUserData.to_json())

# convert the object into a dict
script_instance_custom_user_data_dict = script_instance_custom_user_data_instance.to_dict()
# create an instance of ScriptInstanceCustomUserData from a dict
script_instance_custom_user_data_from_dict = ScriptInstanceCustomUserData.from_dict(script_instance_custom_user_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


