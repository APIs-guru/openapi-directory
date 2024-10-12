# CrrAccessToken

Container level access token for CRR

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token_string** | **str** | Access token used for authentication | [optional] 
**backup_management_type** | **str** | Backup Management Type | [optional] 
**container_name** | **str** | Container Unique name | [optional] 
**container_type** | **str** | Container Type | [optional] 
**coordinator_service_stamp_id** | **str** | CoordinatorServiceStampId to be used by BCM in restore call | [optional] 
**coordinator_service_stamp_uri** | **str** | CoordinatorServiceStampUri to be used by BCM in restore call | [optional] 
**datasource_container_name** | **str** | Datasource Container Unique Name | [optional] 
**datasource_id** | **str** | Datasource Id | [optional] 
**datasource_name** | **str** | Datasource Friendly Name | [optional] 
**datasource_type** | **str** | Datasource Type | [optional] 
**protection_service_stamp_id** | **str** | ProtectionServiceStampId to be used by BCM in restore call | [optional] 
**protection_service_stamp_uri** | **str** | ProtectionServiceStampUri to be used by BCM in restore call | [optional] 
**recovery_point_id** | **str** | Recovery Point Id | [optional] 
**recovery_point_time** | **str** | Recovery Point Time | [optional] 
**resource_group_name** | **str** | Resource Group name of the source vault | [optional] 
**resource_id** | **str** | Resource Id of the source vault | [optional] 
**resource_name** | **str** | Resource Name of the source vault | [optional] 
**subscription_id** | **str** | Subscription Id of the source vault | [optional] 
**token_extended_information** | **str** | Extended Information about the token like FileSpec etc. | [optional] 

## Example

```python
from openapi_client.models.crr_access_token import CrrAccessToken

# TODO update the JSON string below
json = "{}"
# create an instance of CrrAccessToken from a JSON string
crr_access_token_instance = CrrAccessToken.from_json(json)
# print the JSON string representation of the object
print(CrrAccessToken.to_json())

# convert the object into a dict
crr_access_token_dict = crr_access_token_instance.to_dict()
# create an instance of CrrAccessToken from a dict
crr_access_token_from_dict = CrrAccessToken.from_dict(crr_access_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


