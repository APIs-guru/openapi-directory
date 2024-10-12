# BatchGetValuesResponse

The response when retrieving more than one range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spreadsheet_id** | **str** | The ID of the spreadsheet the data was retrieved from. | [optional] 
**value_ranges** | [**List[ValueRange]**](ValueRange.md) | The requested values. The order of the ValueRanges is the same as the order of the requested ranges. | [optional] 

## Example

```python
from openapi_client.models.batch_get_values_response import BatchGetValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetValuesResponse from a JSON string
batch_get_values_response_instance = BatchGetValuesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetValuesResponse.to_json())

# convert the object into a dict
batch_get_values_response_dict = batch_get_values_response_instance.to_dict()
# create an instance of BatchGetValuesResponse from a dict
batch_get_values_response_from_dict = BatchGetValuesResponse.from_dict(batch_get_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


