# IssueBean

Details about an issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changelog** | [**PageOfChangelogs**](PageOfChangelogs.md) | Details of changelogs associated with the issue. | [optional] [readonly] 
**editmeta** | [**IssueUpdateMetadata**](IssueUpdateMetadata.md) | The metadata for the fields on the issue that can be amended. | [optional] [readonly] 
**expand** | **str** | Expand options that include additional issue details in the response. | [optional] [readonly] 
**fields** | **Dict[str, object]** |  | [optional] 
**fields_to_include** | [**IncludedFields**](IncludedFields.md) |  | [optional] 
**id** | **str** | The ID of the issue. | [optional] [readonly] 
**key** | **str** | The key of the issue. | [optional] [readonly] 
**names** | **Dict[str, str]** | The ID and name of each field present on the issue. | [optional] [readonly] 
**operations** | [**Operations**](Operations.md) | The operations that can be performed on the issue. | [optional] [readonly] 
**properties** | **Dict[str, object]** | Details of the issue properties identified in the request. | [optional] [readonly] 
**rendered_fields** | **Dict[str, object]** | The rendered value of each field present on the issue. | [optional] [readonly] 
**var_schema** | [**Dict[str, JsonTypeBean]**](JsonTypeBean.md) | The schema describing each field present on the issue. | [optional] [readonly] 
**var_self** | **str** | The URL of the issue details. | [optional] [readonly] 
**transitions** | [**List[IssueTransition]**](IssueTransition.md) | The transitions that can be performed on the issue. | [optional] [readonly] 
**versioned_representations** | **Dict[str, Dict[str, object]]** | The versions of each field on the issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_bean import IssueBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssueBean from a JSON string
issue_bean_instance = IssueBean.from_json(json)
# print the JSON string representation of the object
print(IssueBean.to_json())

# convert the object into a dict
issue_bean_dict = issue_bean_instance.to_dict()
# create an instance of IssueBean from a dict
issue_bean_from_dict = IssueBean.from_dict(issue_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


