# KustoDatabaseDataSetMapping

A Kusto database data set mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**KustoDatabaseDataSetMappingProperties**](KustoDatabaseDataSetMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.kusto_database_data_set_mapping import KustoDatabaseDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of KustoDatabaseDataSetMapping from a JSON string
kusto_database_data_set_mapping_instance = KustoDatabaseDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(KustoDatabaseDataSetMapping.to_json())

# convert the object into a dict
kusto_database_data_set_mapping_dict = kusto_database_data_set_mapping_instance.to_dict()
# create an instance of KustoDatabaseDataSetMapping from a dict
kusto_database_data_set_mapping_from_dict = KustoDatabaseDataSetMapping.from_dict(kusto_database_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


