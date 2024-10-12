# TimeRulePlugIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly_file_name** | **str** |  | [optional] 
**assembly_id** | **str** |  | [optional] 
**assembly_load_properties** | **List[str]** |  | [optional] 
**assembly_time** | **datetime** |  | [optional] 
**compatibility_version** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_browsable** | **bool** |  | [optional] 
**is_non_editable_config** | **bool** |  | [optional] 
**links** | [**TimeRulePlugInLinks**](TimeRulePlugInLinks.md) |  | [optional] 
**loaded_assembly_time** | **datetime** |  | [optional] 
**loaded_version** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_rule_plug_in import TimeRulePlugIn

# TODO update the JSON string below
json = "{}"
# create an instance of TimeRulePlugIn from a JSON string
time_rule_plug_in_instance = TimeRulePlugIn.from_json(json)
# print the JSON string representation of the object
print(TimeRulePlugIn.to_json())

# convert the object into a dict
time_rule_plug_in_dict = time_rule_plug_in_instance.to_dict()
# create an instance of TimeRulePlugIn from a dict
time_rule_plug_in_from_dict = TimeRulePlugIn.from_dict(time_rule_plug_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


