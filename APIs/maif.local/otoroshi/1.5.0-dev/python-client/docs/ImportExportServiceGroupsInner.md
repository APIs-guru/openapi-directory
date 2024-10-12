# ImportExportServiceGroupsInner

An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The descriptoin of the group | [optional] 
**id** | **str** | The unique id of the group. Usually 64 random alpha numerical characters, but can be anything | 
**name** | **str** | The name of the group | 

## Example

```python
from openapi_client.models.import_export_service_groups_inner import ImportExportServiceGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportServiceGroupsInner from a JSON string
import_export_service_groups_inner_instance = ImportExportServiceGroupsInner.from_json(json)
# print the JSON string representation of the object
print(ImportExportServiceGroupsInner.to_json())

# convert the object into a dict
import_export_service_groups_inner_dict = import_export_service_groups_inner_instance.to_dict()
# create an instance of ImportExportServiceGroupsInner from a dict
import_export_service_groups_inner_from_dict = ImportExportServiceGroupsInner.from_dict(import_export_service_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


