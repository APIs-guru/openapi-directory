# ApplicationGatewayProbeHealthResponseMatch

Application gateway probe health response match

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body that must be contained in the health response. Default value is empty. | [optional] 
**status_codes** | **List[str]** | Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_probe_health_response_match import ApplicationGatewayProbeHealthResponseMatch

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayProbeHealthResponseMatch from a JSON string
application_gateway_probe_health_response_match_instance = ApplicationGatewayProbeHealthResponseMatch.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayProbeHealthResponseMatch.to_json())

# convert the object into a dict
application_gateway_probe_health_response_match_dict = application_gateway_probe_health_response_match_instance.to_dict()
# create an instance of ApplicationGatewayProbeHealthResponseMatch from a dict
application_gateway_probe_health_response_match_from_dict = ApplicationGatewayProbeHealthResponseMatch.from_dict(application_gateway_probe_health_response_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


