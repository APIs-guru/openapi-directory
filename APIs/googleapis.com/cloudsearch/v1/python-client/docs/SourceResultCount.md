# SourceResultCount

Per source result count information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more_results** | **bool** | Whether there are more search results for this source. | [optional] 
**result_count_estimate** | **str** | The estimated result count for this source. | [optional] 
**result_count_exact** | **str** | The exact result count for this source. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_result_count import SourceResultCount

# TODO update the JSON string below
json = "{}"
# create an instance of SourceResultCount from a JSON string
source_result_count_instance = SourceResultCount.from_json(json)
# print the JSON string representation of the object
print(SourceResultCount.to_json())

# convert the object into a dict
source_result_count_dict = source_result_count_instance.to_dict()
# create an instance of SourceResultCount from a dict
source_result_count_from_dict = SourceResultCount.from_dict(source_result_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


