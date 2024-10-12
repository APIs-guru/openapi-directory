# GenerateTcpProxyScriptRequest

Request message for 'GenerateTcpProxyScript' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_machine_type** | **str** | Required. The type of the Compute instance that will host the proxy. | [optional] 
**vm_name** | **str** | Required. The name of the Compute instance that will host the proxy. | [optional] 
**vm_subnet** | **str** | Required. The name of the subnet the Compute instance will use for private connectivity. Must be supplied in the form of projects/{project}/regions/{region}/subnetworks/{subnetwork}. Note: the region for the subnet must match the Compute instance region. | [optional] 
**vm_zone** | **str** | Optional. The Google Cloud Platform zone to create the VM in. The fully qualified name of the zone must be specified, including the region name, for example \&quot;us-central1-b\&quot;. If not specified, uses the \&quot;-b\&quot; zone of the destination Connection Profile&#39;s region. | [optional] 

## Example

```python
from openapi_client.models.generate_tcp_proxy_script_request import GenerateTcpProxyScriptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateTcpProxyScriptRequest from a JSON string
generate_tcp_proxy_script_request_instance = GenerateTcpProxyScriptRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateTcpProxyScriptRequest.to_json())

# convert the object into a dict
generate_tcp_proxy_script_request_dict = generate_tcp_proxy_script_request_instance.to_dict()
# create an instance of GenerateTcpProxyScriptRequest from a dict
generate_tcp_proxy_script_request_from_dict = GenerateTcpProxyScriptRequest.from_dict(generate_tcp_proxy_script_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


