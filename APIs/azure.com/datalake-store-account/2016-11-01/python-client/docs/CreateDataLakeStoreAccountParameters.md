# CreateDataLakeStoreAccountParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**EncryptionIdentity**](EncryptionIdentity.md) |  | [optional] 
**location** | **str** | The resource location. | 
**properties** | [**CreateDataLakeStoreAccountProperties**](CreateDataLakeStoreAccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.create_data_lake_store_account_parameters import CreateDataLakeStoreAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataLakeStoreAccountParameters from a JSON string
create_data_lake_store_account_parameters_instance = CreateDataLakeStoreAccountParameters.from_json(json)
# print the JSON string representation of the object
print(CreateDataLakeStoreAccountParameters.to_json())

# convert the object into a dict
create_data_lake_store_account_parameters_dict = create_data_lake_store_account_parameters_instance.to_dict()
# create an instance of CreateDataLakeStoreAccountParameters from a dict
create_data_lake_store_account_parameters_from_dict = CreateDataLakeStoreAccountParameters.from_dict(create_data_lake_store_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


