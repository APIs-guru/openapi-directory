# ListMuteConfigsResponse

Response message for listing mute configs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mute_configs** | [**List[GoogleCloudSecuritycenterV1MuteConfig]**](GoogleCloudSecuritycenterV1MuteConfig.md) | The mute configs from the specified parent. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_mute_configs_response import ListMuteConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMuteConfigsResponse from a JSON string
list_mute_configs_response_instance = ListMuteConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMuteConfigsResponse.to_json())

# convert the object into a dict
list_mute_configs_response_dict = list_mute_configs_response_instance.to_dict()
# create an instance of ListMuteConfigsResponse from a dict
list_mute_configs_response_from_dict = ListMuteConfigsResponse.from_dict(list_mute_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


