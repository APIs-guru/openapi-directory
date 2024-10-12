# DuplicateFilterViewRequest

Duplicates a particular filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_id** | **int** | The ID of the filter being duplicated. | [optional] 

## Example

```python
from openapi_client.models.duplicate_filter_view_request import DuplicateFilterViewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateFilterViewRequest from a JSON string
duplicate_filter_view_request_instance = DuplicateFilterViewRequest.from_json(json)
# print the JSON string representation of the object
print(DuplicateFilterViewRequest.to_json())

# convert the object into a dict
duplicate_filter_view_request_dict = duplicate_filter_view_request_instance.to_dict()
# create an instance of DuplicateFilterViewRequest from a dict
duplicate_filter_view_request_from_dict = DuplicateFilterViewRequest.from_dict(duplicate_filter_view_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


