# AssetDatabaseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_categories** | **str** |  | [optional] 
**analysis_templates** | **str** |  | [optional] 
**asset_server** | **str** |  | [optional] 
**attribute_categories** | **str** |  | [optional] 
**element_categories** | **str** |  | [optional] 
**element_templates** | **str** |  | [optional] 
**elements** | **str** |  | [optional] 
**enumeration_sets** | **str** |  | [optional] 
**event_frames** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**table_categories** | **str** |  | [optional] 
**tables** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.asset_database_links import AssetDatabaseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AssetDatabaseLinks from a JSON string
asset_database_links_instance = AssetDatabaseLinks.from_json(json)
# print the JSON string representation of the object
print(AssetDatabaseLinks.to_json())

# convert the object into a dict
asset_database_links_dict = asset_database_links_instance.to_dict()
# create an instance of AssetDatabaseLinks from a dict
asset_database_links_from_dict = AssetDatabaseLinks.from_dict(asset_database_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


