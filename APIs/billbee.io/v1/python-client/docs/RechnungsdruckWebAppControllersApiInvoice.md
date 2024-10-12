# RechnungsdruckWebAppControllersApiInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_date** | **datetime** |  | [optional] 
**invoice_number** | **str** |  | [optional] 
**order_number** | **str** |  | [optional] 
**pdf_data** | **bytearray** |  | [optional] 
**pdf_download_url** | **str** |  | [optional] 
**total_gross** | **float** |  | [optional] 
**total_net** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_invoice import RechnungsdruckWebAppControllersApiInvoice

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiInvoice from a JSON string
rechnungsdruck_web_app_controllers_api_invoice_instance = RechnungsdruckWebAppControllersApiInvoice.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiInvoice.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_invoice_dict = rechnungsdruck_web_app_controllers_api_invoice_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiInvoice from a dict
rechnungsdruck_web_app_controllers_api_invoice_from_dict = RechnungsdruckWebAppControllersApiInvoice.from_dict(rechnungsdruck_web_app_controllers_api_invoice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


