# BatchClearValuesRequest

The request for clearing more than one range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ranges** | **List[str]** | The ranges to clear, in [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell). | [optional] 

## Example

```python
from openapi_client.models.batch_clear_values_request import BatchClearValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchClearValuesRequest from a JSON string
batch_clear_values_request_instance = BatchClearValuesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchClearValuesRequest.to_json())

# convert the object into a dict
batch_clear_values_request_dict = batch_clear_values_request_instance.to_dict()
# create an instance of BatchClearValuesRequest from a dict
batch_clear_values_request_from_dict = BatchClearValuesRequest.from_dict(batch_clear_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


