# KustoClusterDataSet

A kusto cluster data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**KustoClusterDataSetProperties**](KustoClusterDataSetProperties.md) |  | 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.kusto_cluster_data_set import KustoClusterDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of KustoClusterDataSet from a JSON string
kusto_cluster_data_set_instance = KustoClusterDataSet.from_json(json)
# print the JSON string representation of the object
print(KustoClusterDataSet.to_json())

# convert the object into a dict
kusto_cluster_data_set_dict = kusto_cluster_data_set_instance.to_dict()
# create an instance of KustoClusterDataSet from a dict
kusto_cluster_data_set_from_dict = KustoClusterDataSet.from_dict(kusto_cluster_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


