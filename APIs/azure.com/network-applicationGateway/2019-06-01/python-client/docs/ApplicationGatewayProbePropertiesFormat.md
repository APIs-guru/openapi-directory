# ApplicationGatewayProbePropertiesFormat

Properties of probe of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Host name to send the probe to. | [optional] 
**interval** | **int** | The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds. | [optional] 
**match** | [**ApplicationGatewayProbeHealthResponseMatch**](ApplicationGatewayProbeHealthResponseMatch.md) |  | [optional] 
**min_servers** | **int** | Minimum number of servers that are always marked healthy. Default value is 0. | [optional] 
**path** | **str** | Relative path of probe. Valid path starts from &#39;/&#39;. Probe is sent to &lt;Protocol&gt;://&lt;host&gt;:&lt;port&gt;&lt;path&gt;. | [optional] 
**pick_host_name_from_backend_http_settings** | **bool** | Whether the host header should be picked from the backend http settings. Default value is false. | [optional] 
**port** | **int** | Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only. | [optional] 
**protocol** | [**ApplicationGatewayProtocol**](ApplicationGatewayProtocol.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**timeout** | **int** | The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds. | [optional] 
**unhealthy_threshold** | **int** | The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_probe_properties_format import ApplicationGatewayProbePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayProbePropertiesFormat from a JSON string
application_gateway_probe_properties_format_instance = ApplicationGatewayProbePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayProbePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_probe_properties_format_dict = application_gateway_probe_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayProbePropertiesFormat from a dict
application_gateway_probe_properties_format_from_dict = ApplicationGatewayProbePropertiesFormat.from_dict(application_gateway_probe_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


