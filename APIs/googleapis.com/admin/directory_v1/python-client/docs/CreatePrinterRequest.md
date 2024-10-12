# CreatePrinterRequest

Request for adding a new printer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The name of the customer. Format: customers/{customer_id} | [optional] 
**printer** | [**Printer**](Printer.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_printer_request import CreatePrinterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePrinterRequest from a JSON string
create_printer_request_instance = CreatePrinterRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePrinterRequest.to_json())

# convert the object into a dict
create_printer_request_dict = create_printer_request_instance.to_dict()
# create an instance of CreatePrinterRequest from a dict
create_printer_request_from_dict = CreatePrinterRequest.from_dict(create_printer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


