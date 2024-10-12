# Printer

Printer configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_messages** | [**List[AuxiliaryMessage]**](AuxiliaryMessage.md) | Output only. Auxiliary messages about issues with the printer configuration if any. | [optional] [readonly] 
**create_time** | **str** | Output only. Time when printer was created. | [optional] [readonly] 
**description** | **str** | Editable. Description of printer. | [optional] 
**display_name** | **str** | Editable. Name of printer. | [optional] 
**id** | **str** | Id of the printer. (During printer creation leave empty) | [optional] 
**make_and_model** | **str** | Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response. | [optional] 
**name** | **str** | The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty) | [optional] 
**org_unit_id** | **str** | Organization Unit that owns this printer (Only can be set during Printer creation) | [optional] 
**uri** | **str** | Editable. Printer URI. | [optional] 
**use_driverless_config** | **bool** | Editable. flag to use driverless configuration or not. If it&#39;s set to be true, make_and_model can be ignored | [optional] 

## Example

```python
from openapi_client.models.printer import Printer

# TODO update the JSON string below
json = "{}"
# create an instance of Printer from a JSON string
printer_instance = Printer.from_json(json)
# print the JSON string representation of the object
print(Printer.to_json())

# convert the object into a dict
printer_dict = printer_instance.to_dict()
# create an instance of Printer from a dict
printer_from_dict = Printer.from_dict(printer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


