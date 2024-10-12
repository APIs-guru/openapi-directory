# DataLakeAnalyticsAccountBasic

A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataLakeAnalyticsAccountPropertiesBasic**](DataLakeAnalyticsAccountPropertiesBasic.md) |  | [optional] 
**id** | **str** | The resource identifer. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_analytics_account_basic import DataLakeAnalyticsAccountBasic

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsAccountBasic from a JSON string
data_lake_analytics_account_basic_instance = DataLakeAnalyticsAccountBasic.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsAccountBasic.to_json())

# convert the object into a dict
data_lake_analytics_account_basic_dict = data_lake_analytics_account_basic_instance.to_dict()
# create an instance of DataLakeAnalyticsAccountBasic from a dict
data_lake_analytics_account_basic_from_dict = DataLakeAnalyticsAccountBasic.from_dict(data_lake_analytics_account_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


