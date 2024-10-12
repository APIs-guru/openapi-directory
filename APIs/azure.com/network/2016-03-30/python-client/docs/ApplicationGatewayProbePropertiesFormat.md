# ApplicationGatewayProbePropertiesFormat

Properties of probe of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Gets or sets the host to send probe to  | [optional] 
**interval** | **int** | Gets or sets probing interval in seconds  | [optional] 
**path** | **str** | Gets or sets the relative path of probe  | [optional] 
**protocol** | **str** | Gets or sets the protocol | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the backend http settings resource Updating/Deleting/Failed | [optional] 
**timeout** | **int** | Gets or sets probing timeout in seconds  | [optional] 
**unhealthy_threshold** | **int** | Gets or sets probing unhealthy threshold  | [optional] 

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


