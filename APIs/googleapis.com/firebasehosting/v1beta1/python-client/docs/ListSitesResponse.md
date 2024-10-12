# ListSitesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to &#x60;ListSites&#x60;. Page tokens are short-lived and should not be stored. | [optional] 
**sites** | [**List[Site]**](Site.md) | A list of Site objects associated with the specified Firebase project. | [optional] 

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


