# IssueFieldOptionConfiguration

Details of the projects the option is available in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | DEPRECATED | [optional] 
**scope** | [**IssueFieldOptionScopeBean**](IssueFieldOptionScopeBean.md) | Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects. | [optional] 

## Example

```python
from openapi_client.models.issue_field_option_configuration import IssueFieldOptionConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of IssueFieldOptionConfiguration from a JSON string
issue_field_option_configuration_instance = IssueFieldOptionConfiguration.from_json(json)
# print the JSON string representation of the object
print(IssueFieldOptionConfiguration.to_json())

# convert the object into a dict
issue_field_option_configuration_dict = issue_field_option_configuration_instance.to_dict()
# create an instance of IssueFieldOptionConfiguration from a dict
issue_field_option_configuration_from_dict = IssueFieldOptionConfiguration.from_dict(issue_field_option_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


