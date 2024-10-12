# ConnectorVersion

ConnectorVersion indicates a specific version of a connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config_templates** | [**List[AuthConfigTemplate]**](AuthConfigTemplate.md) | Output only. List of auth configs supported by the Connector Version. | [optional] [readonly] 
**config_variable_templates** | [**List[ConfigVariableTemplate]**](ConfigVariableTemplate.md) | Output only. List of config variables needed to create a connection. | [optional] [readonly] 
**connector_infra_config** | [**ConnectorInfraConfig**](ConnectorInfraConfig.md) |  | [optional] 
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**destination_config_templates** | [**List[DestinationConfigTemplate]**](DestinationConfigTemplate.md) | Output only. List of destination configs needed to create a connection. | [optional] [readonly] 
**display_name** | **str** | Output only. Display name. | [optional] [readonly] 
**egress_control_config** | [**EgressControlConfig**](EgressControlConfig.md) |  | [optional] 
**eventing_config_template** | [**EventingConfigTemplate**](EventingConfigTemplate.md) |  | [optional] 
**labels** | **Dict[str, str]** | Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] [readonly] 
**launch_stage** | **str** | Output only. Flag to mark the version indicating the launch stage. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the Version. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} Only global location is supported for Connector resource. | [optional] [readonly] 
**release_version** | **str** | Output only. ReleaseVersion of the connector, for example: \&quot;1.0.1-alpha\&quot;. | [optional] [readonly] 
**role_grant** | [**RoleGrant**](RoleGrant.md) |  | [optional] 
**role_grants** | [**List[RoleGrant]**](RoleGrant.md) | Output only. Role grant configurations for this connector version. | [optional] [readonly] 
**ssl_config_template** | [**SslConfigTemplate**](SslConfigTemplate.md) |  | [optional] 
**supported_runtime_features** | [**SupportedRuntimeFeatures**](SupportedRuntimeFeatures.md) |  | [optional] 
**unsupported_connection_types** | **List[str]** | Output only. Unsupported connection types. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_version import ConnectorVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorVersion from a JSON string
connector_version_instance = ConnectorVersion.from_json(json)
# print the JSON string representation of the object
print(ConnectorVersion.to_json())

# convert the object into a dict
connector_version_dict = connector_version_instance.to_dict()
# create an instance of ConnectorVersion from a dict
connector_version_from_dict = ConnectorVersion.from_dict(connector_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


