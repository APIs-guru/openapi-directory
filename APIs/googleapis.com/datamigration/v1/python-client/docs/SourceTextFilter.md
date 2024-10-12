# SourceTextFilter

Filter for text-based data types like varchar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_max_length_filter** | **str** | Optional. The filter will match columns with length smaller than or equal to this number. | [optional] 
**source_min_length_filter** | **str** | Optional. The filter will match columns with length greater than or equal to this number. | [optional] 

## Example

```python
from openapi_client.models.source_text_filter import SourceTextFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SourceTextFilter from a JSON string
source_text_filter_instance = SourceTextFilter.from_json(json)
# print the JSON string representation of the object
print(SourceTextFilter.to_json())

# convert the object into a dict
source_text_filter_dict = source_text_filter_instance.to_dict()
# create an instance of SourceTextFilter from a dict
source_text_filter_from_dict = SourceTextFilter.from_dict(source_text_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


