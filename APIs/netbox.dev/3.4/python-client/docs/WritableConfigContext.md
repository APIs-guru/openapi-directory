# WritableConfigContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_groups** | **List[int]** |  | [optional] 
**cluster_types** | **List[int]** |  | [optional] 
**clusters** | **List[int]** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**data** | **object** |  | 
**description** | **str** |  | [optional] 
**device_types** | **List[int]** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**is_active** | **bool** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**locations** | **List[int]** |  | [optional] 
**name** | **str** |  | 
**platforms** | **List[int]** |  | [optional] 
**regions** | **List[int]** |  | [optional] 
**roles** | **List[int]** |  | [optional] 
**site_groups** | **List[int]** |  | [optional] 
**sites** | **List[int]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**tenant_groups** | **List[int]** |  | [optional] 
**tenants** | **List[int]** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_config_context import WritableConfigContext

# TODO update the JSON string below
json = "{}"
# create an instance of WritableConfigContext from a JSON string
writable_config_context_instance = WritableConfigContext.from_json(json)
# print the JSON string representation of the object
print(WritableConfigContext.to_json())

# convert the object into a dict
writable_config_context_dict = writable_config_context_instance.to_dict()
# create an instance of WritableConfigContext from a dict
writable_config_context_from_dict = WritableConfigContext.from_dict(writable_config_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


