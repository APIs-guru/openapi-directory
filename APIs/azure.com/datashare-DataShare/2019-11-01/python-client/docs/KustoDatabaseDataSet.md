# KustoDatabaseDataSet

A kusto database data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**KustoDatabaseDataSetProperties**](KustoDatabaseDataSetProperties.md) |  | 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.kusto_database_data_set import KustoDatabaseDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of KustoDatabaseDataSet from a JSON string
kusto_database_data_set_instance = KustoDatabaseDataSet.from_json(json)
# print the JSON string representation of the object
print(KustoDatabaseDataSet.to_json())

# convert the object into a dict
kusto_database_data_set_dict = kusto_database_data_set_instance.to_dict()
# create an instance of KustoDatabaseDataSet from a dict
kusto_database_data_set_from_dict = KustoDatabaseDataSet.from_dict(kusto_database_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


