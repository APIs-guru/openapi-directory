# RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_html** | **bool** | If true, the string will be handled as html. | [optional] 
**language** | **str** | The ISO 639-1 code of the target language. Using default if not set. | [optional] 
**text_to_parse** | **str** | The text to parse and replace the placeholders in. | [optional] 
**trim** | **bool** | If true, then the placeholder values are trimmed after usage. | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container import RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer from a JSON string
rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container_instance = RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container_dict = rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer from a dict
rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container_from_dict = RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer.from_dict(rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


