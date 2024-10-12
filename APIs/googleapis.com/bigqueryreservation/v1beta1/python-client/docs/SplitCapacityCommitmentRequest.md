# SplitCapacityCommitmentRequest

The request for ReservationService.SplitCapacityCommitment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slot_count** | **str** | Number of slots in the capacity commitment after the split. | [optional] 

## Example

```python
from openapi_client.models.split_capacity_commitment_request import SplitCapacityCommitmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SplitCapacityCommitmentRequest from a JSON string
split_capacity_commitment_request_instance = SplitCapacityCommitmentRequest.from_json(json)
# print the JSON string representation of the object
print(SplitCapacityCommitmentRequest.to_json())

# convert the object into a dict
split_capacity_commitment_request_dict = split_capacity_commitment_request_instance.to_dict()
# create an instance of SplitCapacityCommitmentRequest from a dict
split_capacity_commitment_request_from_dict = SplitCapacityCommitmentRequest.from_dict(split_capacity_commitment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


