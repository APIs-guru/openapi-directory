# AccountSummary

JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Account ID. | [optional] 
**kind** | **str** | Resource type for Analytics AccountSummary. | [optional] [default to 'analytics#accountSummary']
**name** | **str** | Account name. | [optional] 
**starred** | **bool** | Indicates whether this account is starred or not. | [optional] 
**web_properties** | [**List[WebPropertySummary]**](WebPropertySummary.md) | List of web properties under this account. | [optional] 

## Example

```python
from openapi_client.models.account_summary import AccountSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSummary from a JSON string
account_summary_instance = AccountSummary.from_json(json)
# print the JSON string representation of the object
print(AccountSummary.to_json())

# convert the object into a dict
account_summary_dict = account_summary_instance.to_dict()
# create an instance of AccountSummary from a dict
account_summary_from_dict = AccountSummary.from_dict(account_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


