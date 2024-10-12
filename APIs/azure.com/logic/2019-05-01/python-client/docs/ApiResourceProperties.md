# ApiResourceProperties

The API resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_definition_url** | **str** | The API definition. | [optional] 
**api_definitions** | [**ApiResourceDefinitions**](ApiResourceDefinitions.md) |  | [optional] 
**backend_service** | [**ApiResourceBackendService**](ApiResourceBackendService.md) |  | [optional] 
**capabilities** | **List[str]** | The capabilities. | [optional] 
**category** | [**ApiTier**](ApiTier.md) |  | [optional] 
**connection_parameters** | **Dict[str, object]** | The connection parameters. | [optional] 
**general_information** | [**ApiResourceGeneralInformation**](ApiResourceGeneralInformation.md) |  | [optional] 
**integration_service_environment** | [**ResourceReference**](ResourceReference.md) |  | [optional] 
**metadata** | [**ApiResourceMetadata**](ApiResourceMetadata.md) |  | [optional] 
**name** | **str** | The name | [optional] 
**policies** | [**ApiResourcePolicies**](ApiResourcePolicies.md) |  | [optional] 
**provisioning_state** | [**WorkflowProvisioningState**](WorkflowProvisioningState.md) |  | [optional] 
**runtime_urls** | **List[str]** | The runtime urls. | [optional] 

## Example

```python
from openapi_client.models.api_resource_properties import ApiResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceProperties from a JSON string
api_resource_properties_instance = ApiResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ApiResourceProperties.to_json())

# convert the object into a dict
api_resource_properties_dict = api_resource_properties_instance.to_dict()
# create an instance of ApiResourceProperties from a dict
api_resource_properties_from_dict = ApiResourceProperties.from_dict(api_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


