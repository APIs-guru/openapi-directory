# DeleteProtectedRangeRequest

Deletes the protected range with the given ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protected_range_id** | **int** | The ID of the protected range to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_protected_range_request import DeleteProtectedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteProtectedRangeRequest from a JSON string
delete_protected_range_request_instance = DeleteProtectedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteProtectedRangeRequest.to_json())

# convert the object into a dict
delete_protected_range_request_dict = delete_protected_range_request_instance.to_dict()
# create an instance of DeleteProtectedRangeRequest from a dict
delete_protected_range_request_from_dict = DeleteProtectedRangeRequest.from_dict(delete_protected_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


