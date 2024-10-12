# KustoClusterDataSetMapping

A Kusto cluster data set mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**KustoClusterDataSetMappingProperties**](KustoClusterDataSetMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.kusto_cluster_data_set_mapping import KustoClusterDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of KustoClusterDataSetMapping from a JSON string
kusto_cluster_data_set_mapping_instance = KustoClusterDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(KustoClusterDataSetMapping.to_json())

# convert the object into a dict
kusto_cluster_data_set_mapping_dict = kusto_cluster_data_set_mapping_instance.to_dict()
# create an instance of KustoClusterDataSetMapping from a dict
kusto_cluster_data_set_mapping_from_dict = KustoClusterDataSetMapping.from_dict(kusto_cluster_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


