# RecordSetListResult

The response to a record set List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token for the next page of results. | [optional] 
**value** | [**List[RecordSet]**](RecordSet.md) | Information about the record sets in the response. | [optional] 

## Example

```python
from openapi_client.models.record_set_list_result import RecordSetListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecordSetListResult from a JSON string
record_set_list_result_instance = RecordSetListResult.from_json(json)
# print the JSON string representation of the object
print(RecordSetListResult.to_json())

# convert the object into a dict
record_set_list_result_dict = record_set_list_result_instance.to_dict()
# create an instance of RecordSetListResult from a dict
record_set_list_result_from_dict = RecordSetListResult.from_dict(record_set_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


