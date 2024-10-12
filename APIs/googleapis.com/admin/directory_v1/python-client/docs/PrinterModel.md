# PrinterModel

Printer manufacturer and model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name. eq. \&quot;Brother MFC-8840D\&quot; | [optional] 
**make_and_model** | **str** | Make and model as represented in \&quot;make_and_model\&quot; field in Printer object. eq. \&quot;brother mfc-8840d\&quot; | [optional] 
**manufacturer** | **str** | Manufacturer. eq. \&quot;Brother\&quot; | [optional] 

## Example

```python
from openapi_client.models.printer_model import PrinterModel

# TODO update the JSON string below
json = "{}"
# create an instance of PrinterModel from a JSON string
printer_model_instance = PrinterModel.from_json(json)
# print the JSON string representation of the object
print(PrinterModel.to_json())

# convert the object into a dict
printer_model_dict = printer_model_instance.to_dict()
# create an instance of PrinterModel from a dict
printer_model_from_dict = PrinterModel.from_dict(printer_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


