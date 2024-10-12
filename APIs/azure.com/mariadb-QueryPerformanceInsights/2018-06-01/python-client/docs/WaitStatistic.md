# WaitStatistic

Represents a Wait Statistic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WaitStatisticProperties**](WaitStatisticProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.wait_statistic import WaitStatistic

# TODO update the JSON string below
json = "{}"
# create an instance of WaitStatistic from a JSON string
wait_statistic_instance = WaitStatistic.from_json(json)
# print the JSON string representation of the object
print(WaitStatistic.to_json())

# convert the object into a dict
wait_statistic_dict = wait_statistic_instance.to_dict()
# create an instance of WaitStatistic from a dict
wait_statistic_from_dict = WaitStatistic.from_dict(wait_statistic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


