# ListAdSourcesResponse

Response for the ListAdSourcesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_sources** | [**List[AdSource]**](AdSource.md) | The ad sources. | [optional] 
**next_page_token** | **str** | Used to set the &#x60;page_token&#x60; in the &#x60;ListAdSourcesRequest&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_ad_sources_response import ListAdSourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdSourcesResponse from a JSON string
list_ad_sources_response_instance = ListAdSourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdSourcesResponse.to_json())

# convert the object into a dict
list_ad_sources_response_dict = list_ad_sources_response_instance.to_dict()
# create an instance of ListAdSourcesResponse from a dict
list_ad_sources_response_from_dict = ListAdSourcesResponse.from_dict(list_ad_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


