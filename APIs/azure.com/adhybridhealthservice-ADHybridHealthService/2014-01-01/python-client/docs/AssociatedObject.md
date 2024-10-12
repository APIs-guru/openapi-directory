# AssociatedObject

Object that hold sync object details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the object. | [optional] 
**distinguished_name** | **str** | The distinguished name of the object. | [optional] 
**last_dir_sync_time** | **datetime** | The last dirSync time. | [optional] 
**mail** | **str** | The email of the object. | [optional] 
**object_guid** | **str** | The object guid. | [optional] 
**object_type** | **str** | The object type. | [optional] 
**onpremises_user_principal_name** | **str** | The On-premises UPN. | [optional] 
**proxy_addresses** | **str** | The proxy addresses. | [optional] 
**source_anchor** | **str** | The source anchor. | [optional] 
**source_of_authority** | **str** | The source of authority. | [optional] 
**time_occurred** | **datetime** |  The time of the error. | [optional] 
**user_principal_name** | **str** |  The UPN. | [optional] 

## Example

```python
from openapi_client.models.associated_object import AssociatedObject

# TODO update the JSON string below
json = "{}"
# create an instance of AssociatedObject from a JSON string
associated_object_instance = AssociatedObject.from_json(json)
# print the JSON string representation of the object
print(AssociatedObject.to_json())

# convert the object into a dict
associated_object_dict = associated_object_instance.to_dict()
# create an instance of AssociatedObject from a dict
associated_object_from_dict = AssociatedObject.from_dict(associated_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


