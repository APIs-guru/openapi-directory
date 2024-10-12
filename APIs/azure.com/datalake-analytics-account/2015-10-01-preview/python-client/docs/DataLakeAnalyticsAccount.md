# DataLakeAnalyticsAccount

A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the account subscription ID. | [optional] [readonly] 
**location** | **str** | the account regional location. | [optional] 
**name** | **str** | the account name. | [optional] 
**properties** | [**DataLakeAnalyticsAccountProperties**](DataLakeAnalyticsAccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | the value of custom properties. | [optional] 
**type** | **str** | the namespace and type of the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_analytics_account import DataLakeAnalyticsAccount

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsAccount from a JSON string
data_lake_analytics_account_instance = DataLakeAnalyticsAccount.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsAccount.to_json())

# convert the object into a dict
data_lake_analytics_account_dict = data_lake_analytics_account_instance.to_dict()
# create an instance of DataLakeAnalyticsAccount from a dict
data_lake_analytics_account_from_dict = DataLakeAnalyticsAccount.from_dict(data_lake_analytics_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


