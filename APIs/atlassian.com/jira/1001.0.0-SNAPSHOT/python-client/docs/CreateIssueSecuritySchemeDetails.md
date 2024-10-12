# CreateIssueSecuritySchemeDetails

Issue security scheme and it's details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue security scheme. | [optional] 
**levels** | [**List[SecuritySchemeLevelBean]**](SecuritySchemeLevelBean.md) | The list of scheme levels which should be added to the security scheme. | [optional] 
**name** | **str** | The name of the issue security scheme. Must be unique (case-insensitive). | 

## Example

```python
from openapi_client.models.create_issue_security_scheme_details import CreateIssueSecuritySchemeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIssueSecuritySchemeDetails from a JSON string
create_issue_security_scheme_details_instance = CreateIssueSecuritySchemeDetails.from_json(json)
# print the JSON string representation of the object
print(CreateIssueSecuritySchemeDetails.to_json())

# convert the object into a dict
create_issue_security_scheme_details_dict = create_issue_security_scheme_details_instance.to_dict()
# create an instance of CreateIssueSecuritySchemeDetails from a dict
create_issue_security_scheme_details_from_dict = CreateIssueSecuritySchemeDetails.from_dict(create_issue_security_scheme_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


