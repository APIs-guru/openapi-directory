# AccountStatus

The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account for which the status is reported. | [optional] 
**account_level_issues** | [**List[AccountStatusAccountLevelIssue]**](AccountStatusAccountLevelIssue.md) | A list of account level issues. | [optional] 
**account_management** | **str** | How the account is managed. Acceptable values are: - \&quot;&#x60;manual&#x60;\&quot; - \&quot;&#x60;automatic&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountStatus&#x60;\&quot; | [optional] 
**products** | [**List[AccountStatusProducts]**](AccountStatusProducts.md) | List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes. | [optional] 
**website_claimed** | **bool** | Whether the account&#39;s website is claimed or not. | [optional] 

## Example

```python
from openapi_client.models.account_status import AccountStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatus from a JSON string
account_status_instance = AccountStatus.from_json(json)
# print the JSON string representation of the object
print(AccountStatus.to_json())

# convert the object into a dict
account_status_dict = account_status_instance.to_dict()
# create an instance of AccountStatus from a dict
account_status_from_dict = AccountStatus.from_dict(account_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


