# DataLakeStoreAccount

Data Lake Store account information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the account subscription ID. | [optional] [readonly] 
**identity** | [**EncryptionIdentity**](EncryptionIdentity.md) |  | [optional] 
**location** | **str** | the account regional location. | [optional] 
**name** | **str** | the account name. | [optional] 
**properties** | [**DataLakeStoreAccountProperties**](DataLakeStoreAccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | the value of custom properties. | [optional] 
**type** | **str** | the namespace and type of the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account import DataLakeStoreAccount

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccount from a JSON string
data_lake_store_account_instance = DataLakeStoreAccount.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccount.to_json())

# convert the object into a dict
data_lake_store_account_dict = data_lake_store_account_instance.to_dict()
# create an instance of DataLakeStoreAccount from a dict
data_lake_store_account_from_dict = DataLakeStoreAccount.from_dict(data_lake_store_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


