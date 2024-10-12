# ProtectionIntentQueryObject

Filters to list protection intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Backup management type for the backed up item | [optional] 
**item_name** | **str** | Item name of the intent | [optional] 
**item_type** | **str** | Type of workload this item represents | [optional] 
**parent_name** | **str** | Parent name of the intent | [optional] 

## Example

```python
from openapi_client.models.protection_intent_query_object import ProtectionIntentQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionIntentQueryObject from a JSON string
protection_intent_query_object_instance = ProtectionIntentQueryObject.from_json(json)
# print the JSON string representation of the object
print(ProtectionIntentQueryObject.to_json())

# convert the object into a dict
protection_intent_query_object_dict = protection_intent_query_object_instance.to_dict()
# create an instance of ProtectionIntentQueryObject from a dict
protection_intent_query_object_from_dict = ProtectionIntentQueryObject.from_dict(protection_intent_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


