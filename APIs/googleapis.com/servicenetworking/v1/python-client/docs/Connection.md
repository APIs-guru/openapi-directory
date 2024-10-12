# Connection

Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | The name of service consumer&#39;s VPC network that&#39;s connected with service producer network, in the following format: &#x60;projects/{project}/global/networks/{network}&#x60;. &#x60;{project}&#x60; is a project number, such as in &#x60;12345&#x60; that includes the VPC service consumer&#39;s VPC network. &#x60;{network}&#x60; is the name of the service consumer&#39;s VPC network. | [optional] 
**peering** | **str** | Output only. The name of the VPC Network Peering connection that was created by the service producer. | [optional] [readonly] 
**reserved_peering_ranges** | **List[str]** | The name of one or more allocated IP address ranges for this service producer of type &#x60;PEERING&#x60;. Note that invoking CreateConnection method with a different range when connection is already established will not modify already provisioned service producer subnetworks. If CreateConnection method is invoked repeatedly to reconnect when peering connection had been disconnected on the consumer side, leaving this field empty will restore previously allocated IP ranges. | [optional] 
**service** | **str** | Output only. The name of the peering service that&#39;s associated with this connection, in the following format: &#x60;services/{service name}&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection import Connection

# TODO update the JSON string below
json = "{}"
# create an instance of Connection from a JSON string
connection_instance = Connection.from_json(json)
# print the JSON string representation of the object
print(Connection.to_json())

# convert the object into a dict
connection_dict = connection_instance.to_dict()
# create an instance of Connection from a dict
connection_from_dict = Connection.from_dict(connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


