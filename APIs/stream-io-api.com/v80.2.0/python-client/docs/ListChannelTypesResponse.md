# ListChannelTypesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_types** | [**Dict[str, ChannelTypeConfig]**](ChannelTypeConfig.md) | Object with all channel types | 
**duration** | **str** |  | 

## Example

```python
from openapi_client.models.list_channel_types_response import ListChannelTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListChannelTypesResponse from a JSON string
list_channel_types_response_instance = ListChannelTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListChannelTypesResponse.to_json())

# convert the object into a dict
list_channel_types_response_dict = list_channel_types_response_instance.to_dict()
# create an instance of ListChannelTypesResponse from a dict
list_channel_types_response_from_dict = ListChannelTypesResponse.from_dict(list_channel_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


