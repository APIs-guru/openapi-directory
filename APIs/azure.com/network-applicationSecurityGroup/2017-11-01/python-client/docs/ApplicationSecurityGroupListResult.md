# ApplicationSecurityGroupListResult

A list of application security groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[ApplicationSecurityGroup]**](ApplicationSecurityGroup.md) | A list of application security groups. | [optional] 

## Example

```python
from openapi_client.models.application_security_group_list_result import ApplicationSecurityGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSecurityGroupListResult from a JSON string
application_security_group_list_result_instance = ApplicationSecurityGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationSecurityGroupListResult.to_json())

# convert the object into a dict
application_security_group_list_result_dict = application_security_group_list_result_instance.to_dict()
# create an instance of ApplicationSecurityGroupListResult from a dict
application_security_group_list_result_from_dict = ApplicationSecurityGroupListResult.from_dict(application_security_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


