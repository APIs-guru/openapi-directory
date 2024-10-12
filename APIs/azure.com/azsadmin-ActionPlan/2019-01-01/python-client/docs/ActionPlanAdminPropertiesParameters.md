# ActionPlanAdminPropertiesParameters

Error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Parameters as JToken string | [optional] 

## Example

```python
from openapi_client.models.action_plan_admin_properties_parameters import ActionPlanAdminPropertiesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanAdminPropertiesParameters from a JSON string
action_plan_admin_properties_parameters_instance = ActionPlanAdminPropertiesParameters.from_json(json)
# print the JSON string representation of the object
print(ActionPlanAdminPropertiesParameters.to_json())

# convert the object into a dict
action_plan_admin_properties_parameters_dict = action_plan_admin_properties_parameters_instance.to_dict()
# create an instance of ActionPlanAdminPropertiesParameters from a dict
action_plan_admin_properties_parameters_from_dict = ActionPlanAdminPropertiesParameters.from_dict(action_plan_admin_properties_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


