# RechnungsdruckWebAppControllersApiOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_create_auto_invoice** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**external_id** | **str** |  | [optional] 
**has_invoice** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**invoice_created_at** | **datetime** |  | [optional] 
**invoice_date** | **datetime** |  | [optional] 
**invoice_number** | **str** |  | [optional] 
**order_state_id** | **int** |  | [optional] 
**order_state_text** | **str** |  | [optional] 
**paid_at** | **datetime** |  | [optional] 
**shipped_at** | **datetime** |  | [optional] 
**shop_name** | **str** |  | [optional] 
**total_gross** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order import RechnungsdruckWebAppControllersApiOrder

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiOrder from a JSON string
rechnungsdruck_web_app_controllers_api_order_instance = RechnungsdruckWebAppControllersApiOrder.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiOrder.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_order_dict = rechnungsdruck_web_app_controllers_api_order_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiOrder from a dict
rechnungsdruck_web_app_controllers_api_order_from_dict = RechnungsdruckWebAppControllersApiOrder.from_dict(rechnungsdruck_web_app_controllers_api_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


