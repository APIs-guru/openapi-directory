# ObjectWithSyncError

The objects with sync errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_multi_values** | **bool** | Indicates if the attribute is multi-valued or not. | [optional] 
**attribute_name** | **str** | The attribute name. | [optional] 
**attribute_value** | **str** | The attribute value. | [optional] 
**display_name** | **str** | The display name. | [optional] 
**distinguished_name** | **str** | The distinguished name. | [optional] 
**error_type** | **str** | The error type. | [optional] 
**mail** | **str** | The email. | [optional] 
**max_limit** | **str** | The maximum limit. | [optional] 
**min_limit** | **str** | The minimum limit. | [optional] 
**modififed_value** | **str** | The modified value. | [optional] 
**object_guid** | **str** | The object guid. | [optional] 
**object_type** | **str** | The object type. | [optional] 
**source_anchor** | **str** | The source anchor. | [optional] 
**source_of_authority** | **str** | The source of authority. | [optional] 
**time_occured** | **datetime** | The date and time of occurrence. | [optional] 
**user_principal_name** | **str** | The user principal name. | [optional] 

## Example

```python
from openapi_client.models.object_with_sync_error import ObjectWithSyncError

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectWithSyncError from a JSON string
object_with_sync_error_instance = ObjectWithSyncError.from_json(json)
# print the JSON string representation of the object
print(ObjectWithSyncError.to_json())

# convert the object into a dict
object_with_sync_error_dict = object_with_sync_error_instance.to_dict()
# create an instance of ObjectWithSyncError from a dict
object_with_sync_error_from_dict = ObjectWithSyncError.from_dict(object_with_sync_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


