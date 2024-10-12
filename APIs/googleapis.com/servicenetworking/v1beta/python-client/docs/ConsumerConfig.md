# ConsumerConfig

Configuration information for a private service access connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloudsql_configs** | [**List[CloudSQLConfig]**](CloudSQLConfig.md) | Represents one or multiple Cloud SQL configurations. | [optional] 
**consumer_export_custom_routes** | **bool** | Export custom routes flag value for peering from consumer to producer. | [optional] 
**consumer_export_subnet_routes_with_public_ip** | **bool** | Export subnet routes with public ip flag value for peering from consumer to producer. | [optional] 
**consumer_import_custom_routes** | **bool** | Import custom routes flag value for peering from consumer to producer. | [optional] 
**consumer_import_subnet_routes_with_public_ip** | **bool** | Import subnet routes with public ip flag value for peering from consumer to producer. | [optional] 
**producer_export_custom_routes** | **bool** | Export custom routes flag value for peering from producer to consumer. | [optional] 
**producer_export_subnet_routes_with_public_ip** | **bool** | Export subnet routes with public ip flag value for peering from producer to consumer. | [optional] 
**producer_import_custom_routes** | **bool** | Import custom routes flag value for peering from producer to consumer. | [optional] 
**producer_import_subnet_routes_with_public_ip** | **bool** | Import subnet routes with public ip flag value for peering from producer to consumer. | [optional] 
**producer_network** | **str** | Output only. The VPC host network that is used to host managed service instances. In the format, projects/{project}/global/networks/{network} where {project} is the project number e.g. &#39;12345&#39; and {network} is the network name. | [optional] [readonly] 
**reserved_ranges** | [**List[GoogleCloudServicenetworkingV1ConsumerConfigReservedRange]**](GoogleCloudServicenetworkingV1ConsumerConfigReservedRange.md) | Output only. The reserved ranges associated with this private service access connection. | [optional] [readonly] 
**used_ip_ranges** | **List[str]** | Output only. The IP ranges already in use by consumer or producer | [optional] [readonly] 
**vpc_sc_reference_architecture_enabled** | **bool** | Output only. Indicates whether the VPC Service Controls reference architecture is configured for the producer VPC host network. | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_config import ConsumerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerConfig from a JSON string
consumer_config_instance = ConsumerConfig.from_json(json)
# print the JSON string representation of the object
print(ConsumerConfig.to_json())

# convert the object into a dict
consumer_config_dict = consumer_config_instance.to_dict()
# create an instance of ConsumerConfig from a dict
consumer_config_from_dict = ConsumerConfig.from_dict(consumer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


