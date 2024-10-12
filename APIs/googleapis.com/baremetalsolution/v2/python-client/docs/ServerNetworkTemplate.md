# ServerNetworkTemplate

Network template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_instance_types** | **List[str]** | Instance types this template is applicable to. | [optional] 
**logical_interfaces** | [**List[GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface]**](GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface.md) | Logical interfaces. | [optional] 
**name** | **str** | Output only. Template&#39;s unique name. The full resource name follows the pattern: &#x60;projects/{project}/locations/{location}/serverNetworkTemplate/{server_network_template}&#x60; Generally, the {server_network_template} follows the syntax of \&quot;bond\&quot; or \&quot;nic\&quot;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_network_template import ServerNetworkTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ServerNetworkTemplate from a JSON string
server_network_template_instance = ServerNetworkTemplate.from_json(json)
# print the JSON string representation of the object
print(ServerNetworkTemplate.to_json())

# convert the object into a dict
server_network_template_dict = server_network_template_instance.to_dict()
# create an instance of ServerNetworkTemplate from a dict
server_network_template_from_dict = ServerNetworkTemplate.from_dict(server_network_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


