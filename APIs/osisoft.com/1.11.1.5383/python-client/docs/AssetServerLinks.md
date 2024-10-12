# AssetServerLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_rule_plug_ins** | **str** |  | [optional] 
**databases** | **str** |  | [optional] 
**notification_contact_templates** | **str** |  | [optional] 
**notification_plug_ins** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**security_identities** | **str** |  | [optional] 
**security_mappings** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**time_rule_plug_ins** | **str** |  | [optional] 
**unit_classes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.asset_server_links import AssetServerLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AssetServerLinks from a JSON string
asset_server_links_instance = AssetServerLinks.from_json(json)
# print the JSON string representation of the object
print(AssetServerLinks.to_json())

# convert the object into a dict
asset_server_links_dict = asset_server_links_instance.to_dict()
# create an instance of AssetServerLinks from a dict
asset_server_links_from_dict = AssetServerLinks.from_dict(asset_server_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


