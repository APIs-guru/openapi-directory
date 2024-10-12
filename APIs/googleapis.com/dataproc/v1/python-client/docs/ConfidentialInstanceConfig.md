# ConfidentialInstanceConfig

Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_confidential_compute** | **bool** | Optional. Defines whether the instance should have confidential compute enabled. | [optional] 

## Example

```python
from openapi_client.models.confidential_instance_config import ConfidentialInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConfidentialInstanceConfig from a JSON string
confidential_instance_config_instance = ConfidentialInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(ConfidentialInstanceConfig.to_json())

# convert the object into a dict
confidential_instance_config_dict = confidential_instance_config_instance.to_dict()
# create an instance of ConfidentialInstanceConfig from a dict
confidential_instance_config_from_dict = ConfidentialInstanceConfig.from_dict(confidential_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


