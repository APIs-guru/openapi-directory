# IssueTransition

Details of an issue transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Expand options that include additional transition details in the response. | [optional] [readonly] 
**fields** | [**Dict[str, FieldMetadata]**](FieldMetadata.md) | Details of the fields associated with the issue transition screen. Use this information to populate &#x60;fields&#x60; and &#x60;update&#x60; in a transition request. | [optional] [readonly] 
**has_screen** | **bool** | Whether there is a screen associated with the issue transition. | [optional] [readonly] 
**id** | **str** | The ID of the issue transition. Required when specifying a transition to undertake. | [optional] 
**is_available** | **bool** | Whether the transition is available to be performed. | [optional] [readonly] 
**is_conditional** | **bool** | Whether the issue has to meet criteria before the issue transition is applied. | [optional] [readonly] 
**is_global** | **bool** | Whether the issue transition is global, that is, the transition is applied to issues regardless of their status. | [optional] [readonly] 
**is_initial** | **bool** | Whether this is the initial issue transition for the workflow. | [optional] [readonly] 
**looped** | **bool** |  | [optional] 
**name** | **str** | The name of the issue transition. | [optional] [readonly] 
**to** | [**StatusDetails**](StatusDetails.md) | Details of the issue status after the transition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_transition import IssueTransition

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTransition from a JSON string
issue_transition_instance = IssueTransition.from_json(json)
# print the JSON string representation of the object
print(IssueTransition.to_json())

# convert the object into a dict
issue_transition_dict = issue_transition_instance.to_dict()
# create an instance of IssueTransition from a dict
issue_transition_from_dict = IssueTransition.from_dict(issue_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


