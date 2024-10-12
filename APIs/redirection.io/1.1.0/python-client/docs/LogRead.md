# LogRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**fixed** | **bool** |  | [optional] 
**fixed_by_versions** | **List[str]** |  | [optional] 
**from_smart_list** | **bool** |  | [optional] [readonly] 
**id** | **object** |  | [optional] 
**instance_name** | **object** |  | [optional] 
**method** | **object** |  | [optional] 
**not_fixed_by_versions** | **List[str]** |  | [optional] 
**proxy** | **str** |  | [optional] 
**referrer** | **object** |  | [optional] 
**rule_id** | **str** |  | [optional] 
**simplified_user_agent** | **object** |  | [optional] 
**smart_list** | **str** |  | [optional] [readonly] 
**source** | **object** |  | [optional] 
**status_code** | **object** |  | [optional] 
**target** | **object** |  | [optional] 
**user_agent** | **object** |  | [optional] 
**user_agent_type** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.log_read import LogRead

# TODO update the JSON string below
json = "{}"
# create an instance of LogRead from a JSON string
log_read_instance = LogRead.from_json(json)
# print the JSON string representation of the object
print(LogRead.to_json())

# convert the object into a dict
log_read_dict = log_read_instance.to_dict()
# create an instance of LogRead from a dict
log_read_from_dict = LogRead.from_dict(log_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


