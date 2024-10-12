# CostAllocationDetailsKind

Represents CostAllocation showback rule model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**CostAllocationDetails**](CostAllocationDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.cost_allocation_details_kind import CostAllocationDetailsKind

# TODO update the JSON string below
json = "{}"
# create an instance of CostAllocationDetailsKind from a JSON string
cost_allocation_details_kind_instance = CostAllocationDetailsKind.from_json(json)
# print the JSON string representation of the object
print(CostAllocationDetailsKind.to_json())

# convert the object into a dict
cost_allocation_details_kind_dict = cost_allocation_details_kind_instance.to_dict()
# create an instance of CostAllocationDetailsKind from a dict
cost_allocation_details_kind_from_dict = CostAllocationDetailsKind.from_dict(cost_allocation_details_kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


