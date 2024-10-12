# AccountStatusProducts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel the data applies to. Acceptable values are: - \&quot;&#x60;local&#x60;\&quot; - \&quot;&#x60;online&#x60;\&quot;  | [optional] 
**country** | **str** | The country the data applies to. | [optional] 
**destination** | **str** | The destination the data applies to. | [optional] 
**item_level_issues** | [**List[AccountStatusItemLevelIssue]**](AccountStatusItemLevelIssue.md) | List of item-level issues. | [optional] 
**statistics** | [**AccountStatusStatistics**](AccountStatusStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_status_products import AccountStatusProducts

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatusProducts from a JSON string
account_status_products_instance = AccountStatusProducts.from_json(json)
# print the JSON string representation of the object
print(AccountStatusProducts.to_json())

# convert the object into a dict
account_status_products_dict = account_status_products_instance.to_dict()
# create an instance of AccountStatusProducts from a dict
account_status_products_from_dict = AccountStatusProducts.from_dict(account_status_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


