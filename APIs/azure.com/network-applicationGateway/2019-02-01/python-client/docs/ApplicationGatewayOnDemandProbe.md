# ApplicationGatewayOnDemandProbe

Details of on demand test probe request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**backend_http_settings** | [**ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet**](ApplicationGatewayPathRulePropertiesFormatRewriteRuleSet.md) |  | [optional] 
**host** | **str** | Host name to send the probe to. | [optional] 
**match** | [**ApplicationGatewayProbeHealthResponseMatch**](ApplicationGatewayProbeHealthResponseMatch.md) |  | [optional] 
**path** | **str** | Relative path of probe. Valid path starts from &#39;/&#39;. Probe is sent to &lt;Protocol&gt;://&lt;host&gt;:&lt;port&gt;&lt;path&gt; | [optional] 
**pick_host_name_from_backend_http_settings** | **bool** | Whether the host header should be picked from the backend http settings. Default value is false. | [optional] 
**protocol** | [**ApplicationGatewayProtocol**](ApplicationGatewayProtocol.md) |  | [optional] 
**timeout** | **int** | The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_on_demand_probe import ApplicationGatewayOnDemandProbe

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayOnDemandProbe from a JSON string
application_gateway_on_demand_probe_instance = ApplicationGatewayOnDemandProbe.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayOnDemandProbe.to_json())

# convert the object into a dict
application_gateway_on_demand_probe_dict = application_gateway_on_demand_probe_instance.to_dict()
# create an instance of ApplicationGatewayOnDemandProbe from a dict
application_gateway_on_demand_probe_from_dict = ApplicationGatewayOnDemandProbe.from_dict(application_gateway_on_demand_probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


