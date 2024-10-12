# BatchCreatePrintersRequest

Request for adding new printers in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreatePrinterRequest]**](CreatePrinterRequest.md) | A list of Printers to be created. Max 50 at a time. | [optional] 

## Example

```python
from openapi_client.models.batch_create_printers_request import BatchCreatePrintersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePrintersRequest from a JSON string
batch_create_printers_request_instance = BatchCreatePrintersRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePrintersRequest.to_json())

# convert the object into a dict
batch_create_printers_request_dict = batch_create_printers_request_instance.to_dict()
# create an instance of BatchCreatePrintersRequest from a dict
batch_create_printers_request_from_dict = BatchCreatePrintersRequest.from_dict(batch_create_printers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


