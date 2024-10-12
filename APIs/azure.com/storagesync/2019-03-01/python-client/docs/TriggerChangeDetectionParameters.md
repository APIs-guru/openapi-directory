# TriggerChangeDetectionParameters

The parameters used when calling trigger change detection action on cloud endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_detection_mode** | **str** | Change Detection Mode. Applies to a directory specified in directoryPath parameter. | [optional] 
**directory_path** | **str** | Relative path to a directory Azure File share for which change detection is to be performed. | [optional] 
**paths** | **List[str]** | Array of relative paths on the Azure File share to be included in the change detection. Can be files and directories. | [optional] 

## Example

```python
from openapi_client.models.trigger_change_detection_parameters import TriggerChangeDetectionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerChangeDetectionParameters from a JSON string
trigger_change_detection_parameters_instance = TriggerChangeDetectionParameters.from_json(json)
# print the JSON string representation of the object
print(TriggerChangeDetectionParameters.to_json())

# convert the object into a dict
trigger_change_detection_parameters_dict = trigger_change_detection_parameters_instance.to_dict()
# create an instance of TriggerChangeDetectionParameters from a dict
trigger_change_detection_parameters_from_dict = TriggerChangeDetectionParameters.from_dict(trigger_change_detection_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


