# DatabaseResourceMetadata

Common model for database resource instance metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_configuration** | [**AvailabilityConfiguration**](AvailabilityConfiguration.md) |  | [optional] 
**backup_configuration** | [**BackupConfiguration**](BackupConfiguration.md) |  | [optional] 
**backup_run** | [**BackupRun**](BackupRun.md) |  | [optional] 
**creation_time** | **str** | The creation time of the resource, i.e. the time when resource is created and recorded in partner service. | [optional] 
**current_state** | **str** | Current state of the instance. | [optional] 
**custom_metadata** | [**CustomMetadataData**](CustomMetadataData.md) |  | [optional] 
**entitlements** | [**List[Entitlement]**](Entitlement.md) | Entitlements associated with the resource | [optional] 
**expected_state** | **str** | The state that the instance is expected to be in. For example, an instance state can transition to UNHEALTHY due to wrong patch update, while the expected state will remain at the HEALTHY. | [optional] 
**id** | [**DatabaseResourceId**](DatabaseResourceId.md) |  | [optional] 
**instance_type** | **str** | The type of the instance. Specified at creation time. | [optional] 
**location** | **str** | The resource location. REQUIRED | [optional] 
**primary_resource_id** | [**DatabaseResourceId**](DatabaseResourceId.md) |  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**resource_container** | **str** | Closest parent Cloud Resource Manager container of this resource. It must be resource name of a Cloud Resource Manager project with the format of \&quot;/\&quot;, such as \&quot;projects/123\&quot;. For GCP provided resources, number should be project number. | [optional] 
**resource_name** | **str** | Required. Different from DatabaseResourceId.unique_id, a resource name can be reused over time. That is, after a resource named \&quot;ABC\&quot; is deleted, the name \&quot;ABC\&quot; can be used to to create a new resource within the same source. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel | [optional] 
**updation_time** | **str** | The time at which the resource was updated and recorded at partner service. | [optional] 
**user_labels** | **Dict[str, str]** | User-provided labels, represented as a dictionary where each label is a single key value pair. | [optional] 

## Example

```python
from openapi_client.models.database_resource_metadata import DatabaseResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseResourceMetadata from a JSON string
database_resource_metadata_instance = DatabaseResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(DatabaseResourceMetadata.to_json())

# convert the object into a dict
database_resource_metadata_dict = database_resource_metadata_instance.to_dict()
# create an instance of DatabaseResourceMetadata from a dict
database_resource_metadata_from_dict = DatabaseResourceMetadata.from_dict(database_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


