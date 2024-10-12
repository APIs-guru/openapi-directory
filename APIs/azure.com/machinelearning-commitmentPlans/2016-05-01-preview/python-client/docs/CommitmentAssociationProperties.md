# CommitmentAssociationProperties

Properties of an Azure ML commitment association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_resource_id** | **str** | The ID of the resource this association points to, such as the ARM ID of an Azure ML web service. | [optional] [readonly] 
**commitment_plan_id** | **str** | The ARM ID of the parent Azure ML commitment plan. | [optional] [readonly] 
**creation_date** | **datetime** | The date at which this commitment association was created, in ISO 8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.commitment_association_properties import CommitmentAssociationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentAssociationProperties from a JSON string
commitment_association_properties_instance = CommitmentAssociationProperties.from_json(json)
# print the JSON string representation of the object
print(CommitmentAssociationProperties.to_json())

# convert the object into a dict
commitment_association_properties_dict = commitment_association_properties_instance.to_dict()
# create an instance of CommitmentAssociationProperties from a dict
commitment_association_properties_from_dict = CommitmentAssociationProperties.from_dict(commitment_association_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


