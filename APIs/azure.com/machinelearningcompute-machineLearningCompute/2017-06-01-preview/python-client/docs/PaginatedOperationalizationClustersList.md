# PaginatedOperationalizationClustersList

Paginated list of operationalization clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A continuation link (absolute URI) to the next page of results in the list. | [optional] 
**value** | [**List[OperationalizationCluster]**](OperationalizationCluster.md) | An array of cluster objects. | [optional] 

## Example

```python
from openapi_client.models.paginated_operationalization_clusters_list import PaginatedOperationalizationClustersList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedOperationalizationClustersList from a JSON string
paginated_operationalization_clusters_list_instance = PaginatedOperationalizationClustersList.from_json(json)
# print the JSON string representation of the object
print(PaginatedOperationalizationClustersList.to_json())

# convert the object into a dict
paginated_operationalization_clusters_list_dict = paginated_operationalization_clusters_list_instance.to_dict()
# create an instance of PaginatedOperationalizationClustersList from a dict
paginated_operationalization_clusters_list_from_dict = PaginatedOperationalizationClustersList.from_dict(paginated_operationalization_clusters_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


