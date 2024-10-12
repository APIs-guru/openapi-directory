# AzureApiManagementIntegration

Configuration details for the [Azure API Management](https://support.smartbear.com/swaggerhub/docs/integrations/azure-api-management.html) integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**api_id** | **str** | A unique identifier that allows you to connect your definition to an existing API. If left blank, a unique identifier will be added using an extension, &#x60;x-azure-api-id&#x60;. This value will be ignored if a value exists in the definition.  | [optional] 
**config_type** | **str** | Integration type | 
**service_instance** | **str** | The name of the Azure API Management service instance as it appears in the \&quot;All resources\&quot; list in the Azure portal  | 
**token** | **str** | A personal access token for accessing the Azure API Management service. Documentation for generating tokens is here:  https://docs.microsoft.com/en-us/rest/api/apimanagement/apimanagementrest/azure-api-management-rest-api-authentication Write-only property. Required to create and update the integration.  | [optional] 
**url_suffix** | **str** | This suffix will be appended to the hostname of your API Management service instance to create a public URL for your API | [optional] 

## Example

```python
from openapi_client.models.azure_api_management_integration import AzureApiManagementIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureApiManagementIntegration from a JSON string
azure_api_management_integration_instance = AzureApiManagementIntegration.from_json(json)
# print the JSON string representation of the object
print(AzureApiManagementIntegration.to_json())

# convert the object into a dict
azure_api_management_integration_dict = azure_api_management_integration_instance.to_dict()
# create an instance of AzureApiManagementIntegration from a dict
azure_api_management_integration_from_dict = AzureApiManagementIntegration.from_dict(azure_api_management_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


