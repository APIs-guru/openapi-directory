# AccountsLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action to perform for this link. The &#x60;\&quot;request\&quot;&#x60; action is only available to select merchants. Acceptable values are: - \&quot;&#x60;approve&#x60;\&quot; - \&quot;&#x60;remove&#x60;\&quot; - \&quot;&#x60;request&#x60;\&quot;  | [optional] 
**link_type** | **str** | Type of the link between the two accounts. Acceptable values are: - \&quot;&#x60;channelPartner&#x60;\&quot; - \&quot;&#x60;eCommercePlatform&#x60;\&quot;  | [optional] 
**linked_account_id** | **str** | The ID of the linked account. | [optional] 

## Example

```python
from openapi_client.models.accounts_link_request import AccountsLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsLinkRequest from a JSON string
accounts_link_request_instance = AccountsLinkRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsLinkRequest.to_json())

# convert the object into a dict
accounts_link_request_dict = accounts_link_request_instance.to_dict()
# create an instance of AccountsLinkRequest from a dict
accounts_link_request_from_dict = AccountsLinkRequest.from_dict(accounts_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


