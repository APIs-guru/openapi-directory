# ConsumerPscConnection

PSC connection details on consumer side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**error_info** | [**GoogleRpcErrorInfo**](GoogleRpcErrorInfo.md) |  | [optional] 
**error_type** | **str** | The error type indicates whether the error is consumer facing, producer facing or system internal. | [optional] 
**forwarding_rule** | **str** | The URI of the consumer forwarding rule created. Example: projects/{projectNumOrId}/regions/us-east1/networks/{resourceId}. | [optional] 
**gce_operation** | **str** | The last Compute Engine operation to setup PSC connection. | [optional] 
**ip** | **str** | The IP literal allocated on the consumer network for the PSC forwarding rule that is created to connect to the producer service attachment in this service connection map. | [optional] 
**network** | **str** | The consumer network whose PSC forwarding rule is connected to the service attachments in this service connection map. Note that the network could be on a different project (shared VPC). | [optional] 
**project** | **str** | The consumer project whose PSC forwarding rule is connected to the service attachments in this service connection map. | [optional] 
**psc_connection_id** | **str** | The PSC connection id of the PSC forwarding rule connected to the service attachments in this service connection map. | [optional] 
**selected_subnetwork** | **str** | Output only. The URI of the selected subnetwork selected to allocate IP address for this connection. | [optional] [readonly] 
**service_attachment_uri** | **str** | The URI of a service attachment which is the target of the PSC connection. | [optional] 
**state** | **str** | The state of the PSC connection. | [optional] 

## Example

```python
from openapi_client.models.consumer_psc_connection import ConsumerPscConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerPscConnection from a JSON string
consumer_psc_connection_instance = ConsumerPscConnection.from_json(json)
# print the JSON string representation of the object
print(ConsumerPscConnection.to_json())

# convert the object into a dict
consumer_psc_connection_dict = consumer_psc_connection_instance.to_dict()
# create an instance of ConsumerPscConnection from a dict
consumer_psc_connection_from_dict = ConsumerPscConnection.from_dict(consumer_psc_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


