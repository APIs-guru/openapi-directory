# ListAnalyticsAccountLinksResponse

Response message for ListAnalyticsAccountLinks RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_account_links** | [**List[AnalyticsAccountLink]**](AnalyticsAccountLink.md) | Analytics account links in this organization. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_analytics_account_links_response import ListAnalyticsAccountLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAnalyticsAccountLinksResponse from a JSON string
list_analytics_account_links_response_instance = ListAnalyticsAccountLinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListAnalyticsAccountLinksResponse.to_json())

# convert the object into a dict
list_analytics_account_links_response_dict = list_analytics_account_links_response_instance.to_dict()
# create an instance of ListAnalyticsAccountLinksResponse from a dict
list_analytics_account_links_response_from_dict = ListAnalyticsAccountLinksResponse.from_dict(list_analytics_account_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


