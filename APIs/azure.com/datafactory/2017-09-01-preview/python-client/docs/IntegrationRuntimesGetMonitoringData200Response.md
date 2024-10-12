# IntegrationRuntimesGetMonitoringData200Response

Get monitoring data response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Integration runtime name. | [optional] 
**nodes** | **List[Dict[str, object]]** | Integration runtime node monitoring data. | [optional] 

## Example

```python
from openapi_client.models.integration_runtimes_get_monitoring_data200_response import IntegrationRuntimesGetMonitoringData200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimesGetMonitoringData200Response from a JSON string
integration_runtimes_get_monitoring_data200_response_instance = IntegrationRuntimesGetMonitoringData200Response.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimesGetMonitoringData200Response.to_json())

# convert the object into a dict
integration_runtimes_get_monitoring_data200_response_dict = integration_runtimes_get_monitoring_data200_response_instance.to_dict()
# create an instance of IntegrationRuntimesGetMonitoringData200Response from a dict
integration_runtimes_get_monitoring_data200_response_from_dict = IntegrationRuntimesGetMonitoringData200Response.from_dict(integration_runtimes_get_monitoring_data200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


