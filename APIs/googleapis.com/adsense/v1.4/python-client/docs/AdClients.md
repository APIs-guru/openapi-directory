# AdClients


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[AdClient]**](AdClient.md) | The ad clients returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#adClients. | [optional] [default to 'adsense#adClients']
**next_page_token** | **str** | Continuation token used to page through ad clients. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.ad_clients import AdClients

# TODO update the JSON string below
json = "{}"
# create an instance of AdClients from a JSON string
ad_clients_instance = AdClients.from_json(json)
# print the JSON string representation of the object
print(AdClients.to_json())

# convert the object into a dict
ad_clients_dict = ad_clients_instance.to_dict()
# create an instance of AdClients from a dict
ad_clients_from_dict = AdClients.from_dict(ad_clients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


