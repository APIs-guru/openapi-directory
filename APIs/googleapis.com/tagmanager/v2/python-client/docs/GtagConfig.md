# GtagConfig

Represents a Google tag configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Google tag account ID. | [optional] 
**container_id** | **str** | Google tag container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified. | [optional] 
**gtag_config_id** | **str** | The ID uniquely identifies the Google tag config. | [optional] 
**parameter** | [**List[Parameter]**](Parameter.md) | The Google tag config&#39;s parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update | [optional] 
**path** | **str** | Google tag config&#39;s API relative path. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**type** | **str** | Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update | [optional] 
**workspace_id** | **str** | Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise. | [optional] 

## Example

```python
from openapi_client.models.gtag_config import GtagConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GtagConfig from a JSON string
gtag_config_instance = GtagConfig.from_json(json)
# print the JSON string representation of the object
print(GtagConfig.to_json())

# convert the object into a dict
gtag_config_dict = gtag_config_instance.to_dict()
# create an instance of GtagConfig from a dict
gtag_config_from_dict = GtagConfig.from_dict(gtag_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


