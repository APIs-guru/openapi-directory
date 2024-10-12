# BMSWorkloadItemQueryObject

Filters to list items that can be backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Backup management type. | [optional] 
**protection_status** | **str** | Backup status query parameter. | [optional] 
**workload_item_type** | **str** | Workload Item type | [optional] 
**workload_type** | **str** | Workload type | [optional] 

## Example

```python
from openapi_client.models.bms_workload_item_query_object import BMSWorkloadItemQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSWorkloadItemQueryObject from a JSON string
bms_workload_item_query_object_instance = BMSWorkloadItemQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSWorkloadItemQueryObject.to_json())

# convert the object into a dict
bms_workload_item_query_object_dict = bms_workload_item_query_object_instance.to_dict()
# create an instance of BMSWorkloadItemQueryObject from a dict
bms_workload_item_query_object_from_dict = BMSWorkloadItemQueryObject.from_dict(bms_workload_item_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


