# BatchDeletePrintersResponse

Response for deleting existing printers in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_printers** | [**List[FailureInfo]**](FailureInfo.md) | A list of update failures. | [optional] 
**printer_ids** | **List[str]** | A list of Printer.id that were successfully deleted. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_printers_response import BatchDeletePrintersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePrintersResponse from a JSON string
batch_delete_printers_response_instance = BatchDeletePrintersResponse.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePrintersResponse.to_json())

# convert the object into a dict
batch_delete_printers_response_dict = batch_delete_printers_response_instance.to_dict()
# create an instance of BatchDeletePrintersResponse from a dict
batch_delete_printers_response_from_dict = BatchDeletePrintersResponse.from_dict(batch_delete_printers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


