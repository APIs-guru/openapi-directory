# DirectConnection

The properties that define a direct connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_in_mbps** | **int** | The bandwidth of the connection. | [optional] 
**bgp_session** | [**BgpSession**](BgpSession.md) |  | [optional] 
**connection_identifier** | **str** | The unique identifier (GUID) for the connection. | [optional] 
**connection_state** | **str** | The state of the connection. | [optional] [readonly] 
**error_message** | **str** | The error message related to the connection state, if any. | [optional] [readonly] 
**peering_db_facility_id** | **int** | The PeeringDB.com ID of the facility at which the connection has to be set up. | [optional] 
**provisioned_bandwidth_in_mbps** | **int** | The bandwidth that is actually provisioned. | [optional] [readonly] 
**session_address_provider** | **str** | The field indicating if Microsoft provides session ip addresses. | [optional] 
**use_for_peering_service** | **bool** | The flag that indicates whether or not the connection is used for peering service. | [optional] 

## Example

```python
from openapi_client.models.direct_connection import DirectConnection

# TODO update the JSON string below
json = "{}"
# create an instance of DirectConnection from a JSON string
direct_connection_instance = DirectConnection.from_json(json)
# print the JSON string representation of the object
print(DirectConnection.to_json())

# convert the object into a dict
direct_connection_dict = direct_connection_instance.to_dict()
# create an instance of DirectConnection from a dict
direct_connection_from_dict = DirectConnection.from_dict(direct_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


