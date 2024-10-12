# DataLakeStoreAccountPropertiesBasic

The basic account specific properties that are associated with an underlying Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The unique identifier associated with this Data Lake Store account. | [optional] [readonly] 
**creation_time** | **datetime** | The account creation time. | [optional] [readonly] 
**endpoint** | **str** | The full CName endpoint for this account. | [optional] [readonly] 
**last_modified_time** | **datetime** | The account last modified time. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the Data Lake Store account. | [optional] [readonly] 
**state** | **str** | The state of the Data Lake Store account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_properties_basic import DataLakeStoreAccountPropertiesBasic

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountPropertiesBasic from a JSON string
data_lake_store_account_properties_basic_instance = DataLakeStoreAccountPropertiesBasic.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountPropertiesBasic.to_json())

# convert the object into a dict
data_lake_store_account_properties_basic_dict = data_lake_store_account_properties_basic_instance.to_dict()
# create an instance of DataLakeStoreAccountPropertiesBasic from a dict
data_lake_store_account_properties_basic_from_dict = DataLakeStoreAccountPropertiesBasic.from_dict(data_lake_store_account_properties_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


