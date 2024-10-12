# WebchannelFollow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**WebchannelFollowEmbedded**](WebchannelFollowEmbedded.md) |  | [optional] 
**webchannel_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.webchannel_follow import WebchannelFollow

# TODO update the JSON string below
json = "{}"
# create an instance of WebchannelFollow from a JSON string
webchannel_follow_instance = WebchannelFollow.from_json(json)
# print the JSON string representation of the object
print(WebchannelFollow.to_json())

# convert the object into a dict
webchannel_follow_dict = webchannel_follow_instance.to_dict()
# create an instance of WebchannelFollow from a dict
webchannel_follow_from_dict = WebchannelFollow.from_dict(webchannel_follow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


