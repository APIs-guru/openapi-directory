# ScriptInstanceDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** |  | [optional] 
**custom_script_description** | **str** |  | [optional] 
**custom_script_name** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**event_pattern** | **object** |  | [optional] 
**instance_id** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**runtime_information** | [**ScriptInstanceInfoRuntimeInformationModel**](ScriptInstanceInfoRuntimeInformationModel.md) |  | [optional] 
**script_id** | **str** |  | [optional] 
**script_name** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.script_instance_details import ScriptInstanceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptInstanceDetails from a JSON string
script_instance_details_instance = ScriptInstanceDetails.from_json(json)
# print the JSON string representation of the object
print(ScriptInstanceDetails.to_json())

# convert the object into a dict
script_instance_details_dict = script_instance_details_instance.to_dict()
# create an instance of ScriptInstanceDetails from a dict
script_instance_details_from_dict = ScriptInstanceDetails.from_dict(script_instance_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


