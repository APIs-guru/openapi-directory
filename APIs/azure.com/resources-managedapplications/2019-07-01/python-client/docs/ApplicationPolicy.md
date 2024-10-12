# ApplicationPolicy

Managed application policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The policy name | [optional] 
**parameters** | **str** | The policy parameters. | [optional] 
**policy_definition_id** | **str** | The policy definition Id. | [optional] 

## Example

```python
from openapi_client.models.application_policy import ApplicationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPolicy from a JSON string
application_policy_instance = ApplicationPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationPolicy.to_json())

# convert the object into a dict
application_policy_dict = application_policy_instance.to_dict()
# create an instance of ApplicationPolicy from a dict
application_policy_from_dict = ApplicationPolicy.from_dict(application_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


