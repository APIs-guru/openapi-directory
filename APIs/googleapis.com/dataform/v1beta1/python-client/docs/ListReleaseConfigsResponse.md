# ListReleaseConfigsResponse

`ListReleaseConfigs` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**release_configs** | [**List[ReleaseConfig]**](ReleaseConfig.md) | List of release configs. | [optional] 
**unreachable** | **List[str]** | Locations which could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_release_configs_response import ListReleaseConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReleaseConfigsResponse from a JSON string
list_release_configs_response_instance = ListReleaseConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReleaseConfigsResponse.to_json())

# convert the object into a dict
list_release_configs_response_dict = list_release_configs_response_instance.to_dict()
# create an instance of ListReleaseConfigsResponse from a dict
list_release_configs_response_from_dict = ListReleaseConfigsResponse.from_dict(list_release_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


