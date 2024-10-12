# MoveCommitmentAssociationRequest

Specifies the destination Azure ML commitment plan for a move operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_plan_id** | **str** | The ARM ID of the commitment plan to re-parent the commitment association to. | [optional] 

## Example

```python
from openapi_client.models.move_commitment_association_request import MoveCommitmentAssociationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveCommitmentAssociationRequest from a JSON string
move_commitment_association_request_instance = MoveCommitmentAssociationRequest.from_json(json)
# print the JSON string representation of the object
print(MoveCommitmentAssociationRequest.to_json())

# convert the object into a dict
move_commitment_association_request_dict = move_commitment_association_request_instance.to_dict()
# create an instance of MoveCommitmentAssociationRequest from a dict
move_commitment_association_request_from_dict = MoveCommitmentAssociationRequest.from_dict(move_commitment_association_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


