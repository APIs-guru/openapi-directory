# ListSitesResponse

Response definition for the sites list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token used to page through sites. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 
**sites** | [**List[Site]**](Site.md) | The sites returned in this list response. | [optional] 

## Example

```python
from openapi_client.models.list_sites_response import ListSitesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSitesResponse from a JSON string
list_sites_response_instance = ListSitesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSitesResponse.to_json())

# convert the object into a dict
list_sites_response_dict = list_sites_response_instance.to_dict()
# create an instance of ListSitesResponse from a dict
list_sites_response_from_dict = ListSitesResponse.from_dict(list_sites_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


