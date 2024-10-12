# UpdateIssueSecuritySchemeRequestBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the security scheme scheme. | [optional] 
**name** | **str** | The name of the security scheme scheme. Must be unique. | [optional] 

## Example

```python
from openapi_client.models.update_issue_security_scheme_request_bean import UpdateIssueSecuritySchemeRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateIssueSecuritySchemeRequestBean from a JSON string
update_issue_security_scheme_request_bean_instance = UpdateIssueSecuritySchemeRequestBean.from_json(json)
# print the JSON string representation of the object
print(UpdateIssueSecuritySchemeRequestBean.to_json())

# convert the object into a dict
update_issue_security_scheme_request_bean_dict = update_issue_security_scheme_request_bean_instance.to_dict()
# create an instance of UpdateIssueSecuritySchemeRequestBean from a dict
update_issue_security_scheme_request_bean_from_dict = UpdateIssueSecuritySchemeRequestBean.from_dict(update_issue_security_scheme_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


