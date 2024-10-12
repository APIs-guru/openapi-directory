# CommitmentPlanPatchPayload

The properties of a commitment plan which may be updated via PATCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.commitment_plan_patch_payload import CommitmentPlanPatchPayload

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentPlanPatchPayload from a JSON string
commitment_plan_patch_payload_instance = CommitmentPlanPatchPayload.from_json(json)
# print the JSON string representation of the object
print(CommitmentPlanPatchPayload.to_json())

# convert the object into a dict
commitment_plan_patch_payload_dict = commitment_plan_patch_payload_instance.to_dict()
# create an instance of CommitmentPlanPatchPayload from a dict
commitment_plan_patch_payload_from_dict = CommitmentPlanPatchPayload.from_dict(commitment_plan_patch_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


