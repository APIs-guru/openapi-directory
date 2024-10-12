# UpdateSystemModelsUpdateGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the update group | 
**id** | **str** |  | [optional] 
**inventory_frequency** | **int** | The time in minutes between inventory checks. Default value is 1440 minutes (one day). | [optional] 
**inventory_package** | **str** | The Package ID of the package used for inventory | [optional] 
**localized_description** | **str** | Optional. The StringID used to localize the description of the update group | [optional] 
**localized_name** | **str** | Optional. The StringID used to localize the name of the update group | [optional] 
**priority** | **int** | The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority. | 
**report_field** | **str** | A field to return in the status report for this update group.              Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute}) | [optional] 
**update_type** | **str** | The update type name | 
**validating_field** | **str** | A field used for validation in the status report for this update group.              Specify the field with the format [Label]: {[InventoryPackageID].[Category].[Attribute]}.  (i.e. example: {bec778ca-278d-424a-867a-4653a1a19e86.MyCategory.MyAttribute}) | [optional] 
**value_to_validate** | **str** | The value to validate the ValidationField against. | [optional] 
**version** | **bytearray** | The version of the UpdateGroup, this value is incremented with each modification to a related Bundle or PackageType | [optional] 

## Example

```python
from openapi_client.models.update_system_models_update_group import UpdateSystemModelsUpdateGroup

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsUpdateGroup from a JSON string
update_system_models_update_group_instance = UpdateSystemModelsUpdateGroup.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsUpdateGroup.to_json())

# convert the object into a dict
update_system_models_update_group_dict = update_system_models_update_group_instance.to_dict()
# create an instance of UpdateSystemModelsUpdateGroup from a dict
update_system_models_update_group_from_dict = UpdateSystemModelsUpdateGroup.from_dict(update_system_models_update_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


