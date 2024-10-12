# ReleaseChannelConfig

ReleaseChannelConfig exposes configuration for a release channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The release channel this configuration applies to. | [optional] 
**default_version** | **str** | The default version for newly created clusters on the channel. | [optional] 
**valid_versions** | **List[str]** | List of valid versions for the channel. | [optional] 

## Example

```python
from openapi_client.models.release_channel_config import ReleaseChannelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseChannelConfig from a JSON string
release_channel_config_instance = ReleaseChannelConfig.from_json(json)
# print the JSON string representation of the object
print(ReleaseChannelConfig.to_json())

# convert the object into a dict
release_channel_config_dict = release_channel_config_instance.to_dict()
# create an instance of ReleaseChannelConfig from a dict
release_channel_config_from_dict = ReleaseChannelConfig.from_dict(release_channel_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


