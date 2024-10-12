# BMSPOQueryObject

Filters to list items that can be backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Backup management type. | [optional] 
**friendly_name** | **str** | Friendly name. | [optional] 
**status** | **str** | Backup status query parameter. | [optional] 

## Example

```python
from openapi_client.models.bmspo_query_object import BMSPOQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSPOQueryObject from a JSON string
bmspo_query_object_instance = BMSPOQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSPOQueryObject.to_json())

# convert the object into a dict
bmspo_query_object_dict = bmspo_query_object_instance.to_dict()
# create an instance of BMSPOQueryObject from a dict
bmspo_query_object_from_dict = BMSPOQueryObject.from_dict(bmspo_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


