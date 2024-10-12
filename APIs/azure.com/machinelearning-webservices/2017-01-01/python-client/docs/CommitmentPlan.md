# CommitmentPlan

Information about the machine learning commitment plan associated with the web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the Azure Resource Manager ID of the commitment plan associated with the web service. | 

## Example

```python
from openapi_client.models.commitment_plan import CommitmentPlan

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentPlan from a JSON string
commitment_plan_instance = CommitmentPlan.from_json(json)
# print the JSON string representation of the object
print(CommitmentPlan.to_json())

# convert the object into a dict
commitment_plan_dict = commitment_plan_instance.to_dict()
# create an instance of CommitmentPlan from a dict
commitment_plan_from_dict = CommitmentPlan.from_dict(commitment_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


