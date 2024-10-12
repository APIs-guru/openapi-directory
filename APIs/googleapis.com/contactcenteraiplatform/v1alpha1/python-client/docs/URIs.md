# URIs

Message storing the URIs of the ContactCenter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_bot_uri** | **str** | Chat Bot Uri of the ContactCenter | [optional] 
**media_uri** | **str** | Media Uri of the ContactCenter. | [optional] 
**root_uri** | **str** | Root Uri of the ContactCenter. | [optional] 
**virtual_agent_streaming_service_uri** | **str** | Virtual Agent Streaming Service Uri of the ContactCenter. | [optional] 

## Example

```python
from openapi_client.models.uris import URIs

# TODO update the JSON string below
json = "{}"
# create an instance of URIs from a JSON string
uris_instance = URIs.from_json(json)
# print the JSON string representation of the object
print(URIs.to_json())

# convert the object into a dict
uris_dict = uris_instance.to_dict()
# create an instance of URIs from a dict
uris_from_dict = URIs.from_dict(uris_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


