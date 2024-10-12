# CommitmentAssociationListResult

A page of commitment association resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A URI to retrieve the next page of results. | [optional] 
**value** | [**List[CommitmentAssociation]**](CommitmentAssociation.md) | The set of results for this page. | [optional] 

## Example

```python
from openapi_client.models.commitment_association_list_result import CommitmentAssociationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentAssociationListResult from a JSON string
commitment_association_list_result_instance = CommitmentAssociationListResult.from_json(json)
# print the JSON string representation of the object
print(CommitmentAssociationListResult.to_json())

# convert the object into a dict
commitment_association_list_result_dict = commitment_association_list_result_instance.to_dict()
# create an instance of CommitmentAssociationListResult from a dict
commitment_association_list_result_from_dict = CommitmentAssociationListResult.from_dict(commitment_association_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


