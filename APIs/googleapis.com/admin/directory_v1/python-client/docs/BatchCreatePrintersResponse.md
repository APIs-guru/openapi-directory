# BatchCreatePrintersResponse

Response for adding new printers in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failures** | [**List[FailureInfo]**](FailureInfo.md) | A list of create failures. Printer IDs are not populated, as printer were not created. | [optional] 
**printers** | [**List[Printer]**](Printer.md) | A list of successfully created printers with their IDs populated. | [optional] 

## Example

```python
from openapi_client.models.batch_create_printers_response import BatchCreatePrintersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePrintersResponse from a JSON string
batch_create_printers_response_instance = BatchCreatePrintersResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePrintersResponse.to_json())

# convert the object into a dict
batch_create_printers_response_dict = batch_create_printers_response_instance.to_dict()
# create an instance of BatchCreatePrintersResponse from a dict
batch_create_printers_response_from_dict = BatchCreatePrintersResponse.from_dict(batch_create_printers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


