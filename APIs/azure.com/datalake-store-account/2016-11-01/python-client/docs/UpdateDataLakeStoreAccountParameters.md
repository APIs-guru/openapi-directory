# UpdateDataLakeStoreAccountParameters

Data Lake Store account information to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateDataLakeStoreAccountProperties**](UpdateDataLakeStoreAccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.update_data_lake_store_account_parameters import UpdateDataLakeStoreAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataLakeStoreAccountParameters from a JSON string
update_data_lake_store_account_parameters_instance = UpdateDataLakeStoreAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateDataLakeStoreAccountParameters.to_json())

# convert the object into a dict
update_data_lake_store_account_parameters_dict = update_data_lake_store_account_parameters_instance.to_dict()
# create an instance of UpdateDataLakeStoreAccountParameters from a dict
update_data_lake_store_account_parameters_from_dict = UpdateDataLakeStoreAccountParameters.from_dict(update_data_lake_store_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


