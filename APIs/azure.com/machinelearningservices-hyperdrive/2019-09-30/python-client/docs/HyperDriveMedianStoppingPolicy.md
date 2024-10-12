# HyperDriveMedianStoppingPolicy

Median stopping policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.medianstoppingpolicy?view=azure-ml-py for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HyperDriveMedianStoppingPolicyAllOfProperties**](HyperDriveMedianStoppingPolicyAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.hyper_drive_median_stopping_policy import HyperDriveMedianStoppingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveMedianStoppingPolicy from a JSON string
hyper_drive_median_stopping_policy_instance = HyperDriveMedianStoppingPolicy.from_json(json)
# print the JSON string representation of the object
print(HyperDriveMedianStoppingPolicy.to_json())

# convert the object into a dict
hyper_drive_median_stopping_policy_dict = hyper_drive_median_stopping_policy_instance.to_dict()
# create an instance of HyperDriveMedianStoppingPolicy from a dict
hyper_drive_median_stopping_policy_from_dict = HyperDriveMedianStoppingPolicy.from_dict(hyper_drive_median_stopping_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


