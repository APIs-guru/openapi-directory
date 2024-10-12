# RollbackFhirResourcesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_type** | **str** | Optional. CREATE/UPDATE/DELETE/ALL for reverting all txns of a certain type. | [optional] 
**exclude_rollbacks** | **bool** | Optional. Specifies whether to exclude earlier rollbacks. | [optional] 
**filtering_fields** | [**RollbackFhirResourceFilteringFields**](RollbackFhirResourceFilteringFields.md) |  | [optional] 
**force** | **bool** | Optional. When enabled, changes will be reverted without explicit confirmation | [optional] 
**input_gcs_object** | **str** | Optional. GCS object containing list of {resourceType}/{resourceId} lines, identifying resources to be reverted | [optional] 
**result_gcs_bucket** | **str** | Required. Bucket to deposit result | [optional] 
**rollback_time** | **str** | Required. Time point to rollback to. | [optional] 
**type** | **List[str]** | Optional. If specified, revert only resources of these types | [optional] 

## Example

```python
from openapi_client.models.rollback_fhir_resources_request import RollbackFhirResourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackFhirResourcesRequest from a JSON string
rollback_fhir_resources_request_instance = RollbackFhirResourcesRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackFhirResourcesRequest.to_json())

# convert the object into a dict
rollback_fhir_resources_request_dict = rollback_fhir_resources_request_instance.to_dict()
# create an instance of RollbackFhirResourcesRequest from a dict
rollback_fhir_resources_request_from_dict = RollbackFhirResourcesRequest.from_dict(rollback_fhir_resources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


