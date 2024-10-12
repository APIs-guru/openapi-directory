# CustomConnectorVersion

CustomConnectorVersion indicates a specific version of a connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config** | [**AuthConfig**](AuthConfig.md) |  | [optional] 
**backend_variable_templates** | [**List[ConfigVariableTemplate]**](ConfigVariableTemplate.md) | Optional. Backend variables config templates. This translates to additional variable templates in connection. | [optional] 
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**destination_configs** | [**List[DestinationConfig]**](DestinationConfig.md) | Optional. Destination config(s) for accessing connector facade/ proxy. This is used only when enable_backend_destination_config is true. | [optional] 
**enable_backend_destination_config** | **bool** | Optional. When enabled, the connector will be a facade/ proxy, and connects to the destination provided during connection creation. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**name** | **str** | Output only. Identifier. Resource name of the Version. Format: projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version} | [optional] [readonly] 
**service_account** | **str** | Optional. Service account used by runtime plane to access auth config secrets. | [optional] 
**spec_location** | **str** | Optional. Location of the custom connector spec. The location can be either a public url like &#x60;https://public-url.com/spec&#x60; Or a Google Cloud Storage location like &#x60;gs:///&#x60; | [optional] 
**state** | **str** | Output only. State of the custom connector version. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_connector_version import CustomConnectorVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CustomConnectorVersion from a JSON string
custom_connector_version_instance = CustomConnectorVersion.from_json(json)
# print the JSON string representation of the object
print(CustomConnectorVersion.to_json())

# convert the object into a dict
custom_connector_version_dict = custom_connector_version_instance.to_dict()
# create an instance of CustomConnectorVersion from a dict
custom_connector_version_from_dict = CustomConnectorVersion.from_dict(custom_connector_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


