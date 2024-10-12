# AccountAdsLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_id** | **str** | Customer ID of the Ads account. | [optional] 
**status** | **str** | Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either &#x60;active&#x60; if it was approved in Google Ads or &#x60;pending&#x60; if it&#39;s pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status &#x60;active&#x60; when it&#39;s still pending or with status &#x60;pending&#x60; when it&#39;s already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status &#x60;inactive&#x60; is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.account_ads_link import AccountAdsLink

# TODO update the JSON string below
json = "{}"
# create an instance of AccountAdsLink from a JSON string
account_ads_link_instance = AccountAdsLink.from_json(json)
# print the JSON string representation of the object
print(AccountAdsLink.to_json())

# convert the object into a dict
account_ads_link_dict = account_ads_link_instance.to_dict()
# create an instance of AccountAdsLink from a dict
account_ads_link_from_dict = AccountAdsLink.from_dict(account_ads_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


