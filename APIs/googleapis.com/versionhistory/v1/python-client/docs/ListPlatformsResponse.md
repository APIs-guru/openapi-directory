# ListPlatformsResponse

Response message for ListPlatforms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**platforms** | [**List[Platform]**](Platform.md) | The list of platforms. | [optional] 

## Example

```python
from openapi_client.models.list_platforms_response import ListPlatformsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlatformsResponse from a JSON string
list_platforms_response_instance = ListPlatformsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPlatformsResponse.to_json())

# convert the object into a dict
list_platforms_response_dict = list_platforms_response_instance.to_dict()
# create an instance of ListPlatformsResponse from a dict
list_platforms_response_from_dict = ListPlatformsResponse.from_dict(list_platforms_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


