# AccountActiveAdSummary

Gets a summary of active ads in an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | ID of the account. | [optional] 
**active_ads** | **str** | Ads that have been activated for the account | [optional] 
**active_ads_limit_tier** | **str** | Maximum number of active ads allowed for the account. | [optional] 
**available_ads** | **str** | Ads that can be activated for the account. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountActiveAdSummary\&quot;. | [optional] 

## Example

```python
from openapi_client.models.account_active_ad_summary import AccountActiveAdSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AccountActiveAdSummary from a JSON string
account_active_ad_summary_instance = AccountActiveAdSummary.from_json(json)
# print the JSON string representation of the object
print(AccountActiveAdSummary.to_json())

# convert the object into a dict
account_active_ad_summary_dict = account_active_ad_summary_instance.to_dict()
# create an instance of AccountActiveAdSummary from a dict
account_active_ad_summary_from_dict = AccountActiveAdSummary.from_dict(account_active_ad_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


