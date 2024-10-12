# KustoClusterDataSetMappingProperties

Properties of the Kusto cluster data set mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**kusto_cluster_resource_id** | **str** | Resource id of the sink kusto cluster. | 
**location** | **str** | Location of the sink kusto cluster. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 

## Example

```python
from openapi_client.models.kusto_cluster_data_set_mapping_properties import KustoClusterDataSetMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KustoClusterDataSetMappingProperties from a JSON string
kusto_cluster_data_set_mapping_properties_instance = KustoClusterDataSetMappingProperties.from_json(json)
# print the JSON string representation of the object
print(KustoClusterDataSetMappingProperties.to_json())

# convert the object into a dict
kusto_cluster_data_set_mapping_properties_dict = kusto_cluster_data_set_mapping_properties_instance.to_dict()
# create an instance of KustoClusterDataSetMappingProperties from a dict
kusto_cluster_data_set_mapping_properties_from_dict = KustoClusterDataSetMappingProperties.from_dict(kusto_cluster_data_set_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


