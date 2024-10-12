# AccountGoogleMyBusinessLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gmb_account_id** | **str** | The ID of the Business Profile. If this is provided, then &#x60;gmbEmail&#x60; is ignored. The value of this field should match the &#x60;accountId&#x60; used by the Business Profile API. | [optional] 
**gmb_email** | **str** | The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile. | [optional] 
**status** | **str** | Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.account_google_my_business_link import AccountGoogleMyBusinessLink

# TODO update the JSON string below
json = "{}"
# create an instance of AccountGoogleMyBusinessLink from a JSON string
account_google_my_business_link_instance = AccountGoogleMyBusinessLink.from_json(json)
# print the JSON string representation of the object
print(AccountGoogleMyBusinessLink.to_json())

# convert the object into a dict
account_google_my_business_link_dict = account_google_my_business_link_instance.to_dict()
# create an instance of AccountGoogleMyBusinessLink from a dict
account_google_my_business_link_from_dict = AccountGoogleMyBusinessLink.from_dict(account_google_my_business_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


