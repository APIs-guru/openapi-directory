# ApplicationProperties

The HDInsight cluster application GET response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_state** | **str** | The application state. | [optional] [readonly] 
**application_type** | **str** | The application type. | [optional] 
**compute_profile** | [**ApplicationPropertiesComputeProfile**](ApplicationPropertiesComputeProfile.md) |  | [optional] 
**created_date** | **str** | The application create date time. | [optional] [readonly] 
**errors** | [**List[ApplicationPropertiesErrorsInner]**](ApplicationPropertiesErrorsInner.md) | The list of errors. | [optional] 
**https_endpoints** | [**List[ApplicationGetHttpsEndpoint]**](ApplicationGetHttpsEndpoint.md) | The list of application HTTPS endpoints. | [optional] 
**install_script_actions** | [**List[ApplicationPropertiesInstallScriptActionsInner]**](ApplicationPropertiesInstallScriptActionsInner.md) | The list of install script actions. | [optional] 
**marketplace_identifier** | **str** | The marketplace identifier. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the application. | [optional] [readonly] 
**ssh_endpoints** | [**List[ApplicationGetEndpoint]**](ApplicationGetEndpoint.md) | The list of application SSH endpoints. | [optional] 
**uninstall_script_actions** | [**List[ApplicationPropertiesInstallScriptActionsInner]**](ApplicationPropertiesInstallScriptActionsInner.md) | The list of uninstall script actions. | [optional] 

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


