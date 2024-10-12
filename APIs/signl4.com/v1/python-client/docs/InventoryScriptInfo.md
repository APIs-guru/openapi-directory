# InventoryScriptInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** |  | [optional] 
**data** | [**ScriptDescriptionData**](ScriptDescriptionData.md) |  | [optional] 
**event_pattern** | **object** |  | [optional] 
**script_id** | **str** |  | [optional] 
**script_localization_details** | [**List[ScriptLocalizationDetail]**](ScriptLocalizationDetail.md) |  | [optional] 
**script_name** | **str** |  | [optional] 
**visibility** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.inventory_script_info import InventoryScriptInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryScriptInfo from a JSON string
inventory_script_info_instance = InventoryScriptInfo.from_json(json)
# print the JSON string representation of the object
print(InventoryScriptInfo.to_json())

# convert the object into a dict
inventory_script_info_dict = inventory_script_info_instance.to_dict()
# create an instance of InventoryScriptInfo from a dict
inventory_script_info_from_dict = InventoryScriptInfo.from_dict(inventory_script_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


