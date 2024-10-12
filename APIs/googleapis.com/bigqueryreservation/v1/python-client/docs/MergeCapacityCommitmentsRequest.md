# MergeCapacityCommitmentsRequest

The request for ReservationService.MergeCapacityCommitments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_commitment_ids** | **List[str]** | Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., &#39;abc&#39; for projects/myproject/locations/US/capacityCommitments/abc | [optional] 

## Example

```python
from openapi_client.models.merge_capacity_commitments_request import MergeCapacityCommitmentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MergeCapacityCommitmentsRequest from a JSON string
merge_capacity_commitments_request_instance = MergeCapacityCommitmentsRequest.from_json(json)
# print the JSON string representation of the object
print(MergeCapacityCommitmentsRequest.to_json())

# convert the object into a dict
merge_capacity_commitments_request_dict = merge_capacity_commitments_request_instance.to_dict()
# create an instance of MergeCapacityCommitmentsRequest from a dict
merge_capacity_commitments_request_from_dict = MergeCapacityCommitmentsRequest.from_dict(merge_capacity_commitments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


