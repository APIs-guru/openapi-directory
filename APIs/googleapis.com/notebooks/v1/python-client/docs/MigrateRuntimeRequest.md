# MigrateRuntimeRequest

Request for migrating a Runtime to a Workbench Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Optional. Name of the VPC that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same VPC, and this field must be empty. Format: &#x60;projects/{project_id}/global/networks/{network_id}&#x60; | [optional] 
**post_startup_script_option** | **str** | Optional. Specifies the behavior of post startup script during migration. | [optional] 
**request_id** | **str** | Optional. Idempotent request UUID. | [optional] 
**service_account** | **str** | Optional. The service account to be included in the Compute Engine instance of the new Workbench Instance when the Runtime uses \&quot;single user only\&quot; mode for permission. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. When the Runtime uses service account mode for permission, it will reuse the same service account, and this field must be empty. | [optional] 
**subnet** | **str** | Optional. Name of the subnet that the new Instance is in. This is required if the Runtime uses google-managed network. If the Runtime uses customer-owned network, it will reuse the same subnet, and this field must be empty. Format: &#x60;projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.migrate_runtime_request import MigrateRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateRuntimeRequest from a JSON string
migrate_runtime_request_instance = MigrateRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(MigrateRuntimeRequest.to_json())

# convert the object into a dict
migrate_runtime_request_dict = migrate_runtime_request_instance.to_dict()
# create an instance of MigrateRuntimeRequest from a dict
migrate_runtime_request_from_dict = MigrateRuntimeRequest.from_dict(migrate_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


