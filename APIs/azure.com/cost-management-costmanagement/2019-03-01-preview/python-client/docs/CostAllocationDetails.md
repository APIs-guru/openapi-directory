# CostAllocationDetails

Represents CostAllocation showback rule model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | Cost allocation policy. | [optional] 

## Example

```python
from openapi_client.models.cost_allocation_details import CostAllocationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CostAllocationDetails from a JSON string
cost_allocation_details_instance = CostAllocationDetails.from_json(json)
# print the JSON string representation of the object
print(CostAllocationDetails.to_json())

# convert the object into a dict
cost_allocation_details_dict = cost_allocation_details_instance.to_dict()
# create an instance of CostAllocationDetails from a dict
cost_allocation_details_from_dict = CostAllocationDetails.from_dict(cost_allocation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


