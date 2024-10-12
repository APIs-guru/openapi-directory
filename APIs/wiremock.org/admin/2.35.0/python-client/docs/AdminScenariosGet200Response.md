# AdminScenariosGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenarios** | [**List[AdminScenariosGet200ResponseScenariosInner]**](AdminScenariosGet200ResponseScenariosInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_scenarios_get200_response import AdminScenariosGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AdminScenariosGet200Response from a JSON string
admin_scenarios_get200_response_instance = AdminScenariosGet200Response.from_json(json)
# print the JSON string representation of the object
print(AdminScenariosGet200Response.to_json())

# convert the object into a dict
admin_scenarios_get200_response_dict = admin_scenarios_get200_response_instance.to_dict()
# create an instance of AdminScenariosGet200Response from a dict
admin_scenarios_get200_response_from_dict = AdminScenariosGet200Response.from_dict(admin_scenarios_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


