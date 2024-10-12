# MirrorConfig

Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploy_key_id** | **str** | ID of the SSH deploy key at the other hosting service. Removing this key from the other service would deauthorize Google Cloud Source Repositories from mirroring. | [optional] 
**url** | **str** | URL of the main repository at the other hosting service. | [optional] 
**webhook_id** | **str** | ID of the webhook listening to updates to trigger mirroring. Removing this webhook from the other hosting service will stop Google Cloud Source Repositories from receiving notifications, and thereby disabling mirroring. | [optional] 

## Example

```python
from openapi_client.models.mirror_config import MirrorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MirrorConfig from a JSON string
mirror_config_instance = MirrorConfig.from_json(json)
# print the JSON string representation of the object
print(MirrorConfig.to_json())

# convert the object into a dict
mirror_config_dict = mirror_config_instance.to_dict()
# create an instance of MirrorConfig from a dict
mirror_config_from_dict = MirrorConfig.from_dict(mirror_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


