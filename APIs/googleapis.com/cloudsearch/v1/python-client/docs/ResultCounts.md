# ResultCounts

Result count information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_result_counts** | [**List[SourceResultCount]**](SourceResultCount.md) | Result count information for each source with results. | [optional] 

## Example

```python
from openapi_client.models.result_counts import ResultCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ResultCounts from a JSON string
result_counts_instance = ResultCounts.from_json(json)
# print the JSON string representation of the object
print(ResultCounts.to_json())

# convert the object into a dict
result_counts_dict = result_counts_instance.to_dict()
# create an instance of ResultCounts from a dict
result_counts_from_dict = ResultCounts.from_dict(result_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


