# AddFilterViewResponse

The result of adding a filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**FilterView**](FilterView.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_filter_view_response import AddFilterViewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddFilterViewResponse from a JSON string
add_filter_view_response_instance = AddFilterViewResponse.from_json(json)
# print the JSON string representation of the object
print(AddFilterViewResponse.to_json())

# convert the object into a dict
add_filter_view_response_dict = add_filter_view_response_instance.to_dict()
# create an instance of AddFilterViewResponse from a dict
add_filter_view_response_from_dict = AddFilterViewResponse.from_dict(add_filter_view_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


