# ActionPlanAdminPropertiesError

Error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error Code | [optional] 
**details** | **object** |  | [optional] 
**message** | **str** | Error Message | [optional] 

## Example

```python
from openapi_client.models.action_plan_admin_properties_error import ActionPlanAdminPropertiesError

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanAdminPropertiesError from a JSON string
action_plan_admin_properties_error_instance = ActionPlanAdminPropertiesError.from_json(json)
# print the JSON string representation of the object
print(ActionPlanAdminPropertiesError.to_json())

# convert the object into a dict
action_plan_admin_properties_error_dict = action_plan_admin_properties_error_instance.to_dict()
# create an instance of ActionPlanAdminPropertiesError from a dict
action_plan_admin_properties_error_from_dict = ActionPlanAdminPropertiesError.from_dict(action_plan_admin_properties_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


