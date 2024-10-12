# DuplicateFilterViewResponse

The result of a filter view being duplicated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**FilterView**](FilterView.md) |  | [optional] 

## Example

```python
from openapi_client.models.duplicate_filter_view_response import DuplicateFilterViewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateFilterViewResponse from a JSON string
duplicate_filter_view_response_instance = DuplicateFilterViewResponse.from_json(json)
# print the JSON string representation of the object
print(DuplicateFilterViewResponse.to_json())

# convert the object into a dict
duplicate_filter_view_response_dict = duplicate_filter_view_response_instance.to_dict()
# create an instance of DuplicateFilterViewResponse from a dict
duplicate_filter_view_response_from_dict = DuplicateFilterViewResponse.from_dict(duplicate_filter_view_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


