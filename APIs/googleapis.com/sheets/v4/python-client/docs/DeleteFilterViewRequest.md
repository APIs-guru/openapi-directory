# DeleteFilterViewRequest

Deletes a particular filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_id** | **int** | The ID of the filter to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_filter_view_request import DeleteFilterViewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteFilterViewRequest from a JSON string
delete_filter_view_request_instance = DeleteFilterViewRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteFilterViewRequest.to_json())

# convert the object into a dict
delete_filter_view_request_dict = delete_filter_view_request_instance.to_dict()
# create an instance of DeleteFilterViewRequest from a dict
delete_filter_view_request_from_dict = DeleteFilterViewRequest.from_dict(delete_filter_view_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


