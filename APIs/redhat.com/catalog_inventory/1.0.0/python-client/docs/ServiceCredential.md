# ServiceCredential


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**service_credential_type_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] [readonly] 
**source_updated_at** | **datetime** |  | [optional] [readonly] 
**type_name** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_credential import ServiceCredential

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCredential from a JSON string
service_credential_instance = ServiceCredential.from_json(json)
# print the JSON string representation of the object
print(ServiceCredential.to_json())

# convert the object into a dict
service_credential_dict = service_credential_instance.to_dict()
# create an instance of ServiceCredential from a dict
service_credential_from_dict = ServiceCredential.from_dict(service_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


