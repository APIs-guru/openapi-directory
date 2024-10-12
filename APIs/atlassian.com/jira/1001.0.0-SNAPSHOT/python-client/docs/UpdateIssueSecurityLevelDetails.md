# UpdateIssueSecurityLevelDetails

Details of issue security scheme level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue security scheme level. | [optional] 
**name** | **str** | The name of the issue security scheme level. Must be unique. | [optional] 

## Example

```python
from openapi_client.models.update_issue_security_level_details import UpdateIssueSecurityLevelDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIssueSecurityLevelDetails from a JSON string
update_issue_security_level_details_instance = UpdateIssueSecurityLevelDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateIssueSecurityLevelDetails.to_json())

# convert the object into a dict
update_issue_security_level_details_dict = update_issue_security_level_details_instance.to_dict()
# create an instance of UpdateIssueSecurityLevelDetails from a dict
update_issue_security_level_details_from_dict = UpdateIssueSecurityLevelDetails.from_dict(update_issue_security_level_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


