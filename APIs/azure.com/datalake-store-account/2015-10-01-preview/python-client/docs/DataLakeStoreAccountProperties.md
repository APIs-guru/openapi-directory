# DataLakeStoreAccountProperties

Data Lake Store account properties information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | the account creation time. | [optional] [readonly] 
**default_group** | **str** | the default owner group for all new folders and files created in the Data Lake Store account. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**encryption_provisioning_state** | **str** | The current state of encryption provisioning for this Data Lake store account. | [optional] [readonly] 
**encryption_state** | **str** | The current state of encryption for this Data Lake store account. | [optional] 
**endpoint** | **str** | the gateway host. | [optional] 
**last_modified_time** | **datetime** | the account last modified time. | [optional] [readonly] 
**provisioning_state** | **str** | the status of the Data Lake Store account while being provisioned. | [optional] [readonly] 
**state** | **str** | the status of the Data Lake Store account after provisioning has completed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_properties import DataLakeStoreAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountProperties from a JSON string
data_lake_store_account_properties_instance = DataLakeStoreAccountProperties.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountProperties.to_json())

# convert the object into a dict
data_lake_store_account_properties_dict = data_lake_store_account_properties_instance.to_dict()
# create an instance of DataLakeStoreAccountProperties from a dict
data_lake_store_account_properties_from_dict = DataLakeStoreAccountProperties.from_dict(data_lake_store_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


