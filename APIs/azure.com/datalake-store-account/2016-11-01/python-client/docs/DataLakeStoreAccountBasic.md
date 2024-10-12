# DataLakeStoreAccountBasic

Basic Data Lake Store account information, returned on list calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataLakeStoreAccountPropertiesBasic**](DataLakeStoreAccountPropertiesBasic.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_basic import DataLakeStoreAccountBasic

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountBasic from a JSON string
data_lake_store_account_basic_instance = DataLakeStoreAccountBasic.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountBasic.to_json())

# convert the object into a dict
data_lake_store_account_basic_dict = data_lake_store_account_basic_instance.to_dict()
# create an instance of DataLakeStoreAccountBasic from a dict
data_lake_store_account_basic_from_dict = DataLakeStoreAccountBasic.from_dict(data_lake_store_account_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


