# PscConnection

Information about a specific Private Service Connect connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_address** | **str** | The resource reference of the consumer address. | [optional] 
**consumer_forwarding_rule** | **str** | The resource reference of the PSC Forwarding Rule within the consumer VPC. | [optional] 
**consumer_target_project** | **str** | The project where the PSC connection is created. | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**error_info** | [**GoogleRpcErrorInfo**](GoogleRpcErrorInfo.md) |  | [optional] 
**error_type** | **str** | The error type indicates whether the error is consumer facing, producer facing or system internal. | [optional] 
**gce_operation** | **str** | The last Compute Engine operation to setup PSC connection. | [optional] 
**psc_connection_id** | **str** | The PSC connection id of the PSC forwarding rule. | [optional] 
**selected_subnetwork** | **str** | Output only. The URI of the subnetwork selected to allocate IP address for this connection. | [optional] [readonly] 
**state** | **str** | State of the PSC Connection | [optional] 

## Example

```python
from openapi_client.models.psc_connection import PscConnection

# TODO update the JSON string below
json = "{}"
# create an instance of PscConnection from a JSON string
psc_connection_instance = PscConnection.from_json(json)
# print the JSON string representation of the object
print(PscConnection.to_json())

# convert the object into a dict
psc_connection_dict = psc_connection_instance.to_dict()
# create an instance of PscConnection from a dict
psc_connection_from_dict = PscConnection.from_dict(psc_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


