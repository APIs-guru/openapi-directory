# GoogleCloudIntegrationsV1alphaIntegrationParameter

Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Type of the parameter. | [optional] 
**default_value** | [**GoogleCloudIntegrationsV1alphaValueType**](GoogleCloudIntegrationsV1alphaValueType.md) |  | [optional] 
**display_name** | **str** | The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is \&quot;foo.bar.myName\&quot;, then the name would be \&quot;myName\&quot;. | [optional] 
**input_output_type** | **str** | Specifies the input/output type for the parameter. | [optional] 
**is_transient** | **bool** | Whether this parameter is a transient parameter. | [optional] 
**json_schema** | **str** | This schema will be used to validate runtime JSON-typed values of this parameter. | [optional] 
**key** | **str** | Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. | [optional] 
**producer** | **str** | The identifier of the node (TaskConfig/TriggerConfig) this parameter was produced by, if it is a transient param or a copy of an input param. | [optional] 
**searchable** | **bool** | Searchable in the execution log or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_integration_parameter import GoogleCloudIntegrationsV1alphaIntegrationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaIntegrationParameter from a JSON string
google_cloud_integrations_v1alpha_integration_parameter_instance = GoogleCloudIntegrationsV1alphaIntegrationParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaIntegrationParameter.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_integration_parameter_dict = google_cloud_integrations_v1alpha_integration_parameter_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaIntegrationParameter from a dict
google_cloud_integrations_v1alpha_integration_parameter_from_dict = GoogleCloudIntegrationsV1alphaIntegrationParameter.from_dict(google_cloud_integrations_v1alpha_integration_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


