# RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RechnungsdruckWebAppControllersApiInvoice**](RechnungsdruckWebAppControllersApiInvoice.md) |  | [optional] 
**error_code** | **int** |  | [optional] 
**error_description** | **int** |  | [optional] [readonly] 
**error_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice import RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice from a JSON string
rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice_instance = RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice_dict = rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice from a dict
rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice_from_dict = RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice.from_dict(rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


