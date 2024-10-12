# AccountLink

An account link. Represents the link between a Google Ads customer and a Hotel Ads (Hotel Center) account. An account link defines the set of hotels under the Hotel Center account that is linked to the Google Ads customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_link_target** | [**AccountLinkTarget**](AccountLinkTarget.md) |  | [optional] 
**google_ads_customer_name** | **str** | Required for CREATE requests. The value representing the Google Ads customer ID in the format &#x60;customers/{google_ads_customer_id}&#x60;. For example: &#x60;customers/0123456789&#x60;. Note that the &#x60;googleAdsCustomerName&#x60; field is not returned in responses to GET requests. | [optional] 
**name** | **str** | The resource name for the account link in the format &#x60;accounts/{account_id}/accountLinks/{account_link_id}&#x60;. | [optional] 
**status** | **str** | The current status of the account link. | [optional] 

## Example

```python
from openapi_client.models.account_link import AccountLink

# TODO update the JSON string below
json = "{}"
# create an instance of AccountLink from a JSON string
account_link_instance = AccountLink.from_json(json)
# print the JSON string representation of the object
print(AccountLink.to_json())

# convert the object into a dict
account_link_dict = account_link_instance.to_dict()
# create an instance of AccountLink from a dict
account_link_from_dict = AccountLink.from_dict(account_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


