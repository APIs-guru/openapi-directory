# ConnectionInfo

ConnectionInfo singleton resource. https://google.aip.dev/156

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_uid** | **str** | Output only. The unique ID of the Instance. | [optional] [readonly] 
**ip_address** | **str** | Output only. The private network IP address for the Instance. This is the default IP for the instance and is always created (even if enable_public_ip is set). This is the connection endpoint for an end-user application. | [optional] [readonly] 
**name** | **str** | The name of the ConnectionInfo singleton resource, e.g.: projects/{project}/locations/{location}/clusters/*/instances/*/connectionInfo This field currently has no semantic meaning. | [optional] 
**pem_certificate_chain** | **List[str]** | Output only. The pem-encoded chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. | [optional] [readonly] 
**psc_dns_name** | **str** | Output only. The DNS name to use with PSC for the Instance. | [optional] [readonly] 
**public_ip_address** | **str** | Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_info import ConnectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionInfo from a JSON string
connection_info_instance = ConnectionInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectionInfo.to_json())

# convert the object into a dict
connection_info_dict = connection_info_instance.to_dict()
# create an instance of ConnectionInfo from a dict
connection_info_from_dict = ConnectionInfo.from_dict(connection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


