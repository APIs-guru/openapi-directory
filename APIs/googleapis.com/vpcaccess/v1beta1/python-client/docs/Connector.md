# Connector

Definition of a Serverless VPC Access connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_projects** | **List[str]** | Output only. List of projects using the connector. | [optional] [readonly] 
**create_time** | **str** | Output only. The creation time of the connector. | [optional] [readonly] 
**ip_cidr_range** | **str** | The range of internal addresses that follows RFC 4632 notation. Example: &#x60;10.132.0.0/28&#x60;. | [optional] 
**last_restart_time** | **str** | Output only. The last restart time of the connector. | [optional] [readonly] 
**machine_type** | **str** | Machine type of VM Instance underlying connector. Default is e2-micro | [optional] 
**max_instances** | **int** | Maximum value of instances in autoscaling group underlying the connector. | [optional] 
**max_throughput** | **int** | Maximum throughput of the connector in Mbps. Refers to the expected throughput when using an &#x60;e2-micro&#x60; machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by --min-throughput. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput. The use of &#x60;max-throughput&#x60; is discouraged in favor of &#x60;max-instances&#x60;. | [optional] 
**min_instances** | **int** | Minimum value of instances in autoscaling group underlying the connector. | [optional] 
**min_throughput** | **int** | Minimum throughput of the connector in Mbps. Refers to the expected throughput when using an &#x60;e2-micro&#x60; machine type. Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by --max-throughput. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput. The use of &#x60;min-throughput&#x60; is discouraged in favor of &#x60;min-instances&#x60;. | [optional] 
**name** | **str** | The resource name in the format &#x60;projects/*/locations/*/connectors/*&#x60;. | [optional] 
**network** | **str** | Name of a VPC network. | [optional] 
**state** | **str** | Output only. State of the VPC access connector. | [optional] [readonly] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.connector import Connector

# TODO update the JSON string below
json = "{}"
# create an instance of Connector from a JSON string
connector_instance = Connector.from_json(json)
# print the JSON string representation of the object
print(Connector.to_json())

# convert the object into a dict
connector_dict = connector_instance.to_dict()
# create an instance of Connector from a dict
connector_from_dict = Connector.from_dict(connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


