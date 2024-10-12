# ServiceCredentialType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**kind** | **str** |  | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**namespace** | **str** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] [readonly] 
**source_deleted_at** | **datetime** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_credential_type import ServiceCredentialType

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCredentialType from a JSON string
service_credential_type_instance = ServiceCredentialType.from_json(json)
# print the JSON string representation of the object
print(ServiceCredentialType.to_json())

# convert the object into a dict
service_credential_type_dict = service_credential_type_instance.to_dict()
# create an instance of ServiceCredentialType from a dict
service_credential_type_from_dict = ServiceCredentialType.from_dict(service_credential_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


