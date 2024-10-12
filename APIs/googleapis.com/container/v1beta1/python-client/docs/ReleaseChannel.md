# ReleaseChannel

ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | channel specifies which release channel the cluster is subscribed to. | [optional] 

## Example

```python
from openapi_client.models.release_channel import ReleaseChannel

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseChannel from a JSON string
release_channel_instance = ReleaseChannel.from_json(json)
# print the JSON string representation of the object
print(ReleaseChannel.to_json())

# convert the object into a dict
release_channel_dict = release_channel_instance.to_dict()
# create an instance of ReleaseChannel from a dict
release_channel_from_dict = ReleaseChannel.from_dict(release_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


