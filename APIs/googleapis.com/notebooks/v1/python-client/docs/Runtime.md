# Runtime

The definition of a Runtime for a managed notebook instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_config** | [**RuntimeAccessConfig**](RuntimeAccessConfig.md) |  | [optional] 
**create_time** | **str** | Output only. Runtime creation time. | [optional] [readonly] 
**health_state** | **str** | Output only. Runtime health_state. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this Managed Notebook or Runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster. | [optional] 
**metrics** | [**RuntimeMetrics**](RuntimeMetrics.md) |  | [optional] 
**migrated** | **bool** | Output only. Bool indicating whether this notebook has been migrated to a Workbench Instance | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the runtime. Format: &#x60;projects/{project}/locations/{location}/runtimes/{runtimeId}&#x60; | [optional] [readonly] 
**runtime_migration_eligibility** | [**RuntimeMigrationEligibility**](RuntimeMigrationEligibility.md) |  | [optional] 
**software_config** | [**RuntimeSoftwareConfig**](RuntimeSoftwareConfig.md) |  | [optional] 
**state** | **str** | Output only. Runtime state. | [optional] [readonly] 
**update_time** | **str** | Output only. Runtime update time. | [optional] [readonly] 
**virtual_machine** | [**VirtualMachine**](VirtualMachine.md) |  | [optional] 

## Example

```python
from openapi_client.models.runtime import Runtime

# TODO update the JSON string below
json = "{}"
# create an instance of Runtime from a JSON string
runtime_instance = Runtime.from_json(json)
# print the JSON string representation of the object
print(Runtime.to_json())

# convert the object into a dict
runtime_dict = runtime_instance.to_dict()
# create an instance of Runtime from a dict
runtime_from_dict = Runtime.from_dict(runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


