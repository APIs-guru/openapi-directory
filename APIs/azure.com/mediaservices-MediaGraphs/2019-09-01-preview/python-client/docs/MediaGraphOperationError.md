# MediaGraphOperationError

The operation error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The operation error code | [optional] 
**message** | **str** | The operation error message | [optional] 

## Example

```python
from openapi_client.models.media_graph_operation_error import MediaGraphOperationError

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphOperationError from a JSON string
media_graph_operation_error_instance = MediaGraphOperationError.from_json(json)
# print the JSON string representation of the object
print(MediaGraphOperationError.to_json())

# convert the object into a dict
media_graph_operation_error_dict = media_graph_operation_error_instance.to_dict()
# create an instance of MediaGraphOperationError from a dict
media_graph_operation_error_from_dict = MediaGraphOperationError.from_dict(media_graph_operation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


