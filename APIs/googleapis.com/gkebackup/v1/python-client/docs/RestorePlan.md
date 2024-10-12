# RestorePlan

The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 13

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_plan** | **str** | Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: &#x60;projects/*/locations/*/backupPlans/*&#x60;. | [optional] 
**cluster** | **str** | Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster&#39;s region must be the same as the RestorePlan. Valid formats: - &#x60;projects/*/locations/*/clusters/*&#x60; - &#x60;projects/*/zones/*/clusters/*&#x60; | [optional] 
**create_time** | **str** | Output only. The timestamp when this RestorePlan resource was created. | [optional] [readonly] 
**description** | **str** | Optional. User specified descriptive string for this RestorePlan. | [optional] 
**etag** | **str** | Output only. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;GetRestorePlan&#x60;, and systems are expected to put that etag in the request to &#x60;UpdateRestorePlan&#x60; or &#x60;DeleteRestorePlan&#x60; to ensure that their change will be applied to the same version of the resource. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. A set of custom labels supplied by user. | [optional] 
**name** | **str** | Output only. The full name of the RestorePlan resource. Format: &#x60;projects/*/locations/*/restorePlans/*&#x60;. | [optional] [readonly] 
**restore_config** | [**RestoreConfig**](RestoreConfig.md) |  | [optional] 
**state** | **str** | Output only. State of the RestorePlan. This State field reflects the various stages a RestorePlan can be in during the Create operation. | [optional] [readonly] 
**state_reason** | **str** | Output only. Human-readable description of why RestorePlan is in the current &#x60;state&#x60; | [optional] [readonly] 
**uid** | **str** | Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when this RestorePlan resource was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restore_plan import RestorePlan

# TODO update the JSON string below
json = "{}"
# create an instance of RestorePlan from a JSON string
restore_plan_instance = RestorePlan.from_json(json)
# print the JSON string representation of the object
print(RestorePlan.to_json())

# convert the object into a dict
restore_plan_dict = restore_plan_instance.to_dict()
# create an instance of RestorePlan from a dict
restore_plan_from_dict = RestorePlan.from_dict(restore_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


