# ListPrinterModelsResponse

Response for listing allowed printer models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**printer_models** | [**List[PrinterModel]**](PrinterModel.md) | Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time. | [optional] 

## Example

```python
from openapi_client.models.list_printer_models_response import ListPrinterModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPrinterModelsResponse from a JSON string
list_printer_models_response_instance = ListPrinterModelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPrinterModelsResponse.to_json())

# convert the object into a dict
list_printer_models_response_dict = list_printer_models_response_instance.to_dict()
# create an instance of ListPrinterModelsResponse from a dict
list_printer_models_response_from_dict = ListPrinterModelsResponse.from_dict(list_printer_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


