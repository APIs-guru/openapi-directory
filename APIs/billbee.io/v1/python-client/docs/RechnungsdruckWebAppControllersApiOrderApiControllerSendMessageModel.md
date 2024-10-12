# RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_mail** | **str** |  | [optional] 
**body** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**send_mode** | **int** |  | [optional] 
**subject** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model import RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel from a JSON string
rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model_instance = RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model_dict = rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel from a dict
rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model_from_dict = RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel.from_dict(rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


