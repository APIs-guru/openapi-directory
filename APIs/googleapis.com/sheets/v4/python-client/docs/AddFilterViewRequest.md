# AddFilterViewRequest

Adds a filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**FilterView**](FilterView.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_filter_view_request import AddFilterViewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddFilterViewRequest from a JSON string
add_filter_view_request_instance = AddFilterViewRequest.from_json(json)
# print the JSON string representation of the object
print(AddFilterViewRequest.to_json())

# convert the object into a dict
add_filter_view_request_dict = add_filter_view_request_instance.to_dict()
# create an instance of AddFilterViewRequest from a dict
add_filter_view_request_from_dict = AddFilterViewRequest.from_dict(add_filter_view_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


