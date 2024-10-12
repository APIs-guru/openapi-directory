# ComposerWorkloadStatus

Workload status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_status_message** | **str** | Output only. Detailed message of the status. | [optional] [readonly] 
**state** | **str** | Output only. Workload state. | [optional] [readonly] 
**status_message** | **str** | Output only. Text to provide more descriptive status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.composer_workload_status import ComposerWorkloadStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ComposerWorkloadStatus from a JSON string
composer_workload_status_instance = ComposerWorkloadStatus.from_json(json)
# print the JSON string representation of the object
print(ComposerWorkloadStatus.to_json())

# convert the object into a dict
composer_workload_status_dict = composer_workload_status_instance.to_dict()
# create an instance of ComposerWorkloadStatus from a dict
composer_workload_status_from_dict = ComposerWorkloadStatus.from_dict(composer_workload_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


