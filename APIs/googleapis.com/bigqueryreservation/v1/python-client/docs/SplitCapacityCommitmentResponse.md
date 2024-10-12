# SplitCapacityCommitmentResponse

The response for ReservationService.SplitCapacityCommitment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | [**CapacityCommitment**](CapacityCommitment.md) |  | [optional] 
**second** | [**CapacityCommitment**](CapacityCommitment.md) |  | [optional] 

## Example

```python
from openapi_client.models.split_capacity_commitment_response import SplitCapacityCommitmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SplitCapacityCommitmentResponse from a JSON string
split_capacity_commitment_response_instance = SplitCapacityCommitmentResponse.from_json(json)
# print the JSON string representation of the object
print(SplitCapacityCommitmentResponse.to_json())

# convert the object into a dict
split_capacity_commitment_response_dict = split_capacity_commitment_response_instance.to_dict()
# create an instance of SplitCapacityCommitmentResponse from a dict
split_capacity_commitment_response_from_dict = SplitCapacityCommitmentResponse.from_dict(split_capacity_commitment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


