# RechnungsdruckWebAppControllersApiOrderStateUpdate

Specifies the parameters used to set the new state of an order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_state_id** | **int** | The new state to set | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_state_update import RechnungsdruckWebAppControllersApiOrderStateUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiOrderStateUpdate from a JSON string
rechnungsdruck_web_app_controllers_api_order_state_update_instance = RechnungsdruckWebAppControllersApiOrderStateUpdate.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiOrderStateUpdate.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_order_state_update_dict = rechnungsdruck_web_app_controllers_api_order_state_update_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiOrderStateUpdate from a dict
rechnungsdruck_web_app_controllers_api_order_state_update_from_dict = RechnungsdruckWebAppControllersApiOrderStateUpdate.from_dict(rechnungsdruck_web_app_controllers_api_order_state_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


