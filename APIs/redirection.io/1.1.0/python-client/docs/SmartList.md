# SmartList



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_version** | **str** |  | [optional] [readonly] 
**description** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**rules** | **str** |  | [optional] [readonly] 
**versions** | **List[str]** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.smart_list import SmartList

# TODO update the JSON string below
json = "{}"
# create an instance of SmartList from a JSON string
smart_list_instance = SmartList.from_json(json)
# print the JSON string representation of the object
print(SmartList.to_json())

# convert the object into a dict
smart_list_dict = smart_list_instance.to_dict()
# create an instance of SmartList from a dict
smart_list_from_dict = SmartList.from_dict(smart_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


