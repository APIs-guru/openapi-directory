# ManagedPrometheusConfig

ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable Managed Collection. | [optional] 

## Example

```python
from openapi_client.models.managed_prometheus_config import ManagedPrometheusConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedPrometheusConfig from a JSON string
managed_prometheus_config_instance = ManagedPrometheusConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedPrometheusConfig.to_json())

# convert the object into a dict
managed_prometheus_config_dict = managed_prometheus_config_instance.to_dict()
# create an instance of ManagedPrometheusConfig from a dict
managed_prometheus_config_from_dict = ManagedPrometheusConfig.from_dict(managed_prometheus_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


