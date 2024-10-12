# DirectConnection

The properties that define a direct connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_in_mbps** | **int** | The bandwidth of the connection. | [optional] 
**bgp_session** | [**BgpSession**](BgpSession.md) |  | [optional] 
**connection_state** | **str** | The state of the connection. | [optional] [readonly] 
**peering_db_facility_id** | **int** | The PeeringDB.com ID of the facility at which the connection has to be set up. | [optional] 
**provisioned_bandwidth_in_mbps** | **int** | The bandwidth that is actually provisioned. | [optional] 

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


