# ResourceUsageExportConfig

Configuration for exporting cluster resource usages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**BigQueryDestination**](BigQueryDestination.md) |  | [optional] 
**consumption_metering_config** | [**ConsumptionMeteringConfig**](ConsumptionMeteringConfig.md) |  | [optional] 
**enable_network_egress_metering** | **bool** | Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. | [optional] 

## Example

```python
from openapi_client.models.resource_usage_export_config import ResourceUsageExportConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUsageExportConfig from a JSON string
resource_usage_export_config_instance = ResourceUsageExportConfig.from_json(json)
# print the JSON string representation of the object
print(ResourceUsageExportConfig.to_json())

# convert the object into a dict
resource_usage_export_config_dict = resource_usage_export_config_instance.to_dict()
# create an instance of ResourceUsageExportConfig from a dict
resource_usage_export_config_from_dict = ResourceUsageExportConfig.from_dict(resource_usage_export_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


