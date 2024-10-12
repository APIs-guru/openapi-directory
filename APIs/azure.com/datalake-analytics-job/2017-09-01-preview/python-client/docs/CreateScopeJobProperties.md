# CreateScopeJobProperties

Scope job properties used when submitting Scope jobs. (Only for use internally with Scope job type.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifier** | **str** | The list of email addresses, separated by semi-colons, to notify when the job reaches a terminal state. | [optional] 
**resources** | [**List[ScopeJobResource]**](ScopeJobResource.md) | The list of resources that are required by the job. | [optional] 

## Example

```python
from openapi_client.models.create_scope_job_properties import CreateScopeJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateScopeJobProperties from a JSON string
create_scope_job_properties_instance = CreateScopeJobProperties.from_json(json)
# print the JSON string representation of the object
print(CreateScopeJobProperties.to_json())

# convert the object into a dict
create_scope_job_properties_dict = create_scope_job_properties_instance.to_dict()
# create an instance of CreateScopeJobProperties from a dict
create_scope_job_properties_from_dict = CreateScopeJobProperties.from_dict(create_scope_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


