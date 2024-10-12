# ApplicationProperties

Describes properties of a application resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_params** | **str** | Internal - used by Visual Studio to setup the debugging session on the local development environment. | [optional] 
**description** | **str** | User readable description of the application. | [optional] 
**diagnostics** | [**DiagnosticsDescription**](DiagnosticsDescription.md) |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**service_names** | **List[str]** | Names of the services in the application. | [optional] [readonly] 
**services** | [**List[ServiceResourceDescription]**](ServiceResourceDescription.md) | Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**status_details** | **str** | Gives additional information about the current status of the application. | [optional] [readonly] 
**unhealthy_evaluation** | **str** | When the application&#39;s health state is not &#39;Ok&#39;, this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_properties import ApplicationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationProperties from a JSON string
application_properties_instance = ApplicationProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationProperties.to_json())

# convert the object into a dict
application_properties_dict = application_properties_instance.to_dict()
# create an instance of ApplicationProperties from a dict
application_properties_from_dict = ApplicationProperties.from_dict(application_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


