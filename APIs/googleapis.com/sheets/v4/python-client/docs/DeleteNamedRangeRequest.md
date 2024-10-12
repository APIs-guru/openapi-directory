# DeleteNamedRangeRequest

Removes the named range with the given ID from the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_range_id** | **str** | The ID of the named range to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_named_range_request import DeleteNamedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteNamedRangeRequest from a JSON string
delete_named_range_request_instance = DeleteNamedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteNamedRangeRequest.to_json())

# convert the object into a dict
delete_named_range_request_dict = delete_named_range_request_instance.to_dict()
# create an instance of DeleteNamedRangeRequest from a dict
delete_named_range_request_from_dict = DeleteNamedRangeRequest.from_dict(delete_named_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


