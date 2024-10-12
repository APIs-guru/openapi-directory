# AddDataLakeStoreParameters

The parameters used to add a new Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AddDataLakeStoreProperties**](AddDataLakeStoreProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_data_lake_store_parameters import AddDataLakeStoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AddDataLakeStoreParameters from a JSON string
add_data_lake_store_parameters_instance = AddDataLakeStoreParameters.from_json(json)
# print the JSON string representation of the object
print(AddDataLakeStoreParameters.to_json())

# convert the object into a dict
add_data_lake_store_parameters_dict = add_data_lake_store_parameters_instance.to_dict()
# create an instance of AddDataLakeStoreParameters from a dict
add_data_lake_store_parameters_from_dict = AddDataLakeStoreParameters.from_dict(add_data_lake_store_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


