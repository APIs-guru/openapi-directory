# IssueTypeScreenSchemeMappingDetails

A list of issue type screen scheme mappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_mappings** | [**List[IssueTypeScreenSchemeMapping]**](IssueTypeScreenSchemeMapping.md) | The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created. | 

## Example

```python
from openapi_client.models.issue_type_screen_scheme_mapping_details import IssueTypeScreenSchemeMappingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemeMappingDetails from a JSON string
issue_type_screen_scheme_mapping_details_instance = IssueTypeScreenSchemeMappingDetails.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemeMappingDetails.to_json())

# convert the object into a dict
issue_type_screen_scheme_mapping_details_dict = issue_type_screen_scheme_mapping_details_instance.to_dict()
# create an instance of IssueTypeScreenSchemeMappingDetails from a dict
issue_type_screen_scheme_mapping_details_from_dict = IssueTypeScreenSchemeMappingDetails.from_dict(issue_type_screen_scheme_mapping_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


