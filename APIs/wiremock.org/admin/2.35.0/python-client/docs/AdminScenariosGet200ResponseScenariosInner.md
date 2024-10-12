# AdminScenariosGet200ResponseScenariosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The scenario ID | [optional] 
**name** | **str** | The scenario name | [optional] 
**possible_states** | **List[str]** |  | [optional] 
**state** | **str** | The current state of this scenario | [optional] [default to 'Started']

## Example

```python
from openapi_client.models.admin_scenarios_get200_response_scenarios_inner import AdminScenariosGet200ResponseScenariosInner

# TODO update the JSON string below
json = "{}"
# create an instance of AdminScenariosGet200ResponseScenariosInner from a JSON string
admin_scenarios_get200_response_scenarios_inner_instance = AdminScenariosGet200ResponseScenariosInner.from_json(json)
# print the JSON string representation of the object
print(AdminScenariosGet200ResponseScenariosInner.to_json())

# convert the object into a dict
admin_scenarios_get200_response_scenarios_inner_dict = admin_scenarios_get200_response_scenarios_inner_instance.to_dict()
# create an instance of AdminScenariosGet200ResponseScenariosInner from a dict
admin_scenarios_get200_response_scenarios_inner_from_dict = AdminScenariosGet200ResponseScenariosInner.from_dict(admin_scenarios_get200_response_scenarios_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


