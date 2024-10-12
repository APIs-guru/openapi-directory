# CommitmentAssociation

Represents the association between a commitment plan and some other resource, such as a Machine Learning web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | An entity tag used to enforce optimistic concurrency. | [optional] 
**properties** | [**CommitmentAssociationProperties**](CommitmentAssociationProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.commitment_association import CommitmentAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentAssociation from a JSON string
commitment_association_instance = CommitmentAssociation.from_json(json)
# print the JSON string representation of the object
print(CommitmentAssociation.to_json())

# convert the object into a dict
commitment_association_dict = commitment_association_instance.to_dict()
# create an instance of CommitmentAssociation from a dict
commitment_association_from_dict = CommitmentAssociation.from_dict(commitment_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


