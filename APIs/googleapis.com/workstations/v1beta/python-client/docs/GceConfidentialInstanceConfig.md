# GceConfidentialInstanceConfig

A set of Compute Engine Confidential VM instance options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_confidential_compute** | **bool** | Optional. Whether the instance has confidential compute enabled. | [optional] 

## Example

```python
from openapi_client.models.gce_confidential_instance_config import GceConfidentialInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GceConfidentialInstanceConfig from a JSON string
gce_confidential_instance_config_instance = GceConfidentialInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(GceConfidentialInstanceConfig.to_json())

# convert the object into a dict
gce_confidential_instance_config_dict = gce_confidential_instance_config_instance.to_dict()
# create an instance of GceConfidentialInstanceConfig from a dict
gce_confidential_instance_config_from_dict = GceConfidentialInstanceConfig.from_dict(gce_confidential_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


