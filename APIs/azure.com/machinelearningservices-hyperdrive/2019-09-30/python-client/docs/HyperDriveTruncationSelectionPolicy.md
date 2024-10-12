# HyperDriveTruncationSelectionPolicy

Truncation selection policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.truncationselectionpolicy?view=azure-ml-py for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HyperDriveTruncationSelectionPolicyAllOfProperties**](HyperDriveTruncationSelectionPolicyAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.hyper_drive_truncation_selection_policy import HyperDriveTruncationSelectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveTruncationSelectionPolicy from a JSON string
hyper_drive_truncation_selection_policy_instance = HyperDriveTruncationSelectionPolicy.from_json(json)
# print the JSON string representation of the object
print(HyperDriveTruncationSelectionPolicy.to_json())

# convert the object into a dict
hyper_drive_truncation_selection_policy_dict = hyper_drive_truncation_selection_policy_instance.to_dict()
# create an instance of HyperDriveTruncationSelectionPolicy from a dict
hyper_drive_truncation_selection_policy_from_dict = HyperDriveTruncationSelectionPolicy.from_dict(hyper_drive_truncation_selection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


