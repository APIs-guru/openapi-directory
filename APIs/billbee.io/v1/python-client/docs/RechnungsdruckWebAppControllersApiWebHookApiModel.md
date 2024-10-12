# RechnungsdruckWebAppControllersApiWebHookApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**filters** | **List[str]** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**id** | **str** |  | [optional] 
**is_paused** | **bool** |  | [optional] 
**properties** | **Dict[str, object]** |  | [optional] 
**secret** | **str** |  | 
**web_hook_uri** | **str** |  | 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_web_hook_api_model import RechnungsdruckWebAppControllersApiWebHookApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiWebHookApiModel from a JSON string
rechnungsdruck_web_app_controllers_api_web_hook_api_model_instance = RechnungsdruckWebAppControllersApiWebHookApiModel.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiWebHookApiModel.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_web_hook_api_model_dict = rechnungsdruck_web_app_controllers_api_web_hook_api_model_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiWebHookApiModel from a dict
rechnungsdruck_web_app_controllers_api_web_hook_api_model_from_dict = RechnungsdruckWebAppControllersApiWebHookApiModel.from_dict(rechnungsdruck_web_app_controllers_api_web_hook_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


