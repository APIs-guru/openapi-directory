# HyperDriveTruncationSelectionPolicyAllOfProperties

Policy configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay_evaluation** | **int** | Value indicating the number of sequences for which the first evaluation is delayed. | [optional] 
**evaluation_interval** | **int** | Evaluation interval of the policy. | [optional] 
**exclude_finished_jobs** | **bool** | Boolean indicating if metrics from finished jobs should be excluded in the policy decision process. | [optional] 
**truncation_percentage** | **int** | Truncation percentage value. | [optional] 

## Example

```python
from openapi_client.models.hyper_drive_truncation_selection_policy_all_of_properties import HyperDriveTruncationSelectionPolicyAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveTruncationSelectionPolicyAllOfProperties from a JSON string
hyper_drive_truncation_selection_policy_all_of_properties_instance = HyperDriveTruncationSelectionPolicyAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(HyperDriveTruncationSelectionPolicyAllOfProperties.to_json())

# convert the object into a dict
hyper_drive_truncation_selection_policy_all_of_properties_dict = hyper_drive_truncation_selection_policy_all_of_properties_instance.to_dict()
# create an instance of HyperDriveTruncationSelectionPolicyAllOfProperties from a dict
hyper_drive_truncation_selection_policy_all_of_properties_from_dict = HyperDriveTruncationSelectionPolicyAllOfProperties.from_dict(hyper_drive_truncation_selection_policy_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


