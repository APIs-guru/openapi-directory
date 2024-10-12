# KustoClusterDataSetProperties

Properties of the kusto cluster data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**kusto_cluster_resource_id** | **str** | Resource id of the kusto cluster. | 
**location** | **str** | Location of the kusto cluster. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the kusto cluster data set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.kusto_cluster_data_set_properties import KustoClusterDataSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KustoClusterDataSetProperties from a JSON string
kusto_cluster_data_set_properties_instance = KustoClusterDataSetProperties.from_json(json)
# print the JSON string representation of the object
print(KustoClusterDataSetProperties.to_json())

# convert the object into a dict
kusto_cluster_data_set_properties_dict = kusto_cluster_data_set_properties_instance.to_dict()
# create an instance of KustoClusterDataSetProperties from a dict
kusto_cluster_data_set_properties_from_dict = KustoClusterDataSetProperties.from_dict(kusto_cluster_data_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


