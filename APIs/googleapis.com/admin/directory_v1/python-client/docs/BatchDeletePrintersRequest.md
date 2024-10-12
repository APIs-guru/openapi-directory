# BatchDeletePrintersRequest

Request for deleting existing printers in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**printer_ids** | **List[str]** | A list of Printer.id that should be deleted. Max 100 at a time. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_printers_request import BatchDeletePrintersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePrintersRequest from a JSON string
batch_delete_printers_request_instance = BatchDeletePrintersRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePrintersRequest.to_json())

# convert the object into a dict
batch_delete_printers_request_dict = batch_delete_printers_request_instance.to_dict()
# create an instance of BatchDeletePrintersRequest from a dict
batch_delete_printers_request_from_dict = BatchDeletePrintersRequest.from_dict(batch_delete_printers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


