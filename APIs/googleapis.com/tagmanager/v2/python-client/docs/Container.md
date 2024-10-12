# Container

Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | The Container ID uniquely identifies the GTM Container. | [optional] 
**domain_name** | **List[str]** | List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**features** | [**ContainerFeatures**](ContainerFeatures.md) |  | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. | [optional] 
**name** | **str** | Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**notes** | **str** | Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**path** | **str** | GTM Container&#39;s API relative path. | [optional] 
**public_id** | **str** | Container Public ID. | [optional] 
**tag_ids** | **List[str]** | All Tag IDs that refer to this Container. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**tagging_server_urls** | **List[str]** | List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 
**usage_context** | **List[str]** | List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update | [optional] 

## Example

```python
from openapi_client.models.container import Container

# TODO update the JSON string below
json = "{}"
# create an instance of Container from a JSON string
container_instance = Container.from_json(json)
# print the JSON string representation of the object
print(Container.to_json())

# convert the object into a dict
container_dict = container_instance.to_dict()
# create an instance of Container from a dict
container_from_dict = Container.from_dict(container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


