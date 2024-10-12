# HyperDriveBanditPolicy

Bandit Policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.banditpolicy?view=azure-ml-py for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HyperDriveBanditPolicyAllOfProperties**](HyperDriveBanditPolicyAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.hyper_drive_bandit_policy import HyperDriveBanditPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveBanditPolicy from a JSON string
hyper_drive_bandit_policy_instance = HyperDriveBanditPolicy.from_json(json)
# print the JSON string representation of the object
print(HyperDriveBanditPolicy.to_json())

# convert the object into a dict
hyper_drive_bandit_policy_dict = hyper_drive_bandit_policy_instance.to_dict()
# create an instance of HyperDriveBanditPolicy from a dict
hyper_drive_bandit_policy_from_dict = HyperDriveBanditPolicy.from_dict(hyper_drive_bandit_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


