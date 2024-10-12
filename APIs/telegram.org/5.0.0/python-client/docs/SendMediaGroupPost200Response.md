# SendMediaGroupPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**List[Message]**](Message.md) |  | 

## Example

```python
from openapi_client.models.send_media_group_post200_response import SendMediaGroupPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendMediaGroupPost200Response from a JSON string
send_media_group_post200_response_instance = SendMediaGroupPost200Response.from_json(json)
# print the JSON string representation of the object
print(SendMediaGroupPost200Response.to_json())

# convert the object into a dict
send_media_group_post200_response_dict = send_media_group_post200_response_instance.to_dict()
# create an instance of SendMediaGroupPost200Response from a dict
send_media_group_post200_response_from_dict = SendMediaGroupPost200Response.from_dict(send_media_group_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


