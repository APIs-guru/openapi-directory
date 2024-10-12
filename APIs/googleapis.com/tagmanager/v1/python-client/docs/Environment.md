# Environment

Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**authorization_code** | **str** | The environment authorization code. | [optional] 
**authorization_timestamp_ms** | **str** | The last update time-stamp for the authorization code. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**container_version_id** | **str** |  | [optional] 
**description** | **str** | The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update | [optional] 
**enable_debug** | **bool** | Whether or not to enable debug by default on for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update | [optional] 
**environment_id** | **str** | GTM Environment ID uniquely identifies the GTM Environment. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. | [optional] 
**name** | **str** | The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update | [optional] 
**type** | **str** | The type of this environment. | [optional] 
**url** | **str** | Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update | [optional] 

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


