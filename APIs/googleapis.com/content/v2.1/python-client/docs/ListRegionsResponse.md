# ListRegionsResponse

Response message for the `ListRegions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**regions** | [**List[Region]**](Region.md) | The regions from the specified merchant. | [optional] 

## Example

```python
from openapi_client.models.list_regions_response import ListRegionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRegionsResponse from a JSON string
list_regions_response_instance = ListRegionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRegionsResponse.to_json())

# convert the object into a dict
list_regions_response_dict = list_regions_response_instance.to_dict()
# create an instance of ListRegionsResponse from a dict
list_regions_response_from_dict = ListRegionsResponse.from_dict(list_regions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


