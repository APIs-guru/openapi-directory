# ApplicationDefinitionProperties

The managed application definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[ApplicationDefinitionArtifact]**](ApplicationDefinitionArtifact.md) | The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition. | [optional] 
**authorizations** | [**List[ApplicationAuthorization]**](ApplicationAuthorization.md) | The managed application provider authorizations. | [optional] 
**create_ui_definition** | **object** | The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string. | [optional] 
**deployment_policy** | [**ApplicationDeploymentPolicy**](ApplicationDeploymentPolicy.md) |  | [optional] 
**description** | **str** | The managed application definition description. | [optional] 
**display_name** | **str** | The managed application definition display name. | [optional] 
**is_enabled** | **bool** | A value indicating whether the package is enabled or not. | [optional] 
**lock_level** | [**ApplicationLockLevel**](ApplicationLockLevel.md) |  | 
**locking_policy** | [**ApplicationPackageLockingPolicyDefinition**](ApplicationPackageLockingPolicyDefinition.md) |  | [optional] 
**main_template** | **object** | The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string. | [optional] 
**management_policy** | [**ApplicationManagementPolicy**](ApplicationManagementPolicy.md) |  | [optional] 
**notification_policy** | [**ApplicationNotificationPolicy**](ApplicationNotificationPolicy.md) |  | [optional] 
**package_file_uri** | **str** | The managed application definition package file Uri. Use this element | [optional] 
**policies** | [**List[ApplicationPolicy]**](ApplicationPolicy.md) | The managed application provider policies. | [optional] 

## Example

```python
from openapi_client.models.application_definition_properties import ApplicationDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDefinitionProperties from a JSON string
application_definition_properties_instance = ApplicationDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationDefinitionProperties.to_json())

# convert the object into a dict
application_definition_properties_dict = application_definition_properties_instance.to_dict()
# create an instance of ApplicationDefinitionProperties from a dict
application_definition_properties_from_dict = ApplicationDefinitionProperties.from_dict(application_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


