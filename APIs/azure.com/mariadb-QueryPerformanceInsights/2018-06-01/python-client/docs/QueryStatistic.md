# QueryStatistic

Represents a Query Statistic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QueryStatisticProperties**](QueryStatisticProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_statistic import QueryStatistic

# TODO update the JSON string below
json = "{}"
# create an instance of QueryStatistic from a JSON string
query_statistic_instance = QueryStatistic.from_json(json)
# print the JSON string representation of the object
print(QueryStatistic.to_json())

# convert the object into a dict
query_statistic_dict = query_statistic_instance.to_dict()
# create an instance of QueryStatistic from a dict
query_statistic_from_dict = QueryStatistic.from_dict(query_statistic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


