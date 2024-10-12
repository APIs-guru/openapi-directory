# UrlsTrackingDomainsResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cname** | [**SenderDomainInfoDkim**](SenderDomainInfoDkim.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**last_tested_at** | **str** |  | [optional] 
**valid_tracking** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.urls_tracking_domains_response_inner import UrlsTrackingDomainsResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of UrlsTrackingDomainsResponseInner from a JSON string
urls_tracking_domains_response_inner_instance = UrlsTrackingDomainsResponseInner.from_json(json)
# print the JSON string representation of the object
print(UrlsTrackingDomainsResponseInner.to_json())

# convert the object into a dict
urls_tracking_domains_response_inner_dict = urls_tracking_domains_response_inner_instance.to_dict()
# create an instance of UrlsTrackingDomainsResponseInner from a dict
urls_tracking_domains_response_inner_from_dict = UrlsTrackingDomainsResponseInner.from_dict(urls_tracking_domains_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


