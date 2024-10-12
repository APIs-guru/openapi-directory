# MediaGraphOperationStatus

The status of the Media Graph operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**MediaGraphOperationError**](MediaGraphOperationError.md) |  | [optional] 
**name** | **str** | The name of the Media Graph operation | 
**status** | **str** | The status of the Media Graph operation | [optional] 

## Example

```python
from openapi_client.models.media_graph_operation_status import MediaGraphOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphOperationStatus from a JSON string
media_graph_operation_status_instance = MediaGraphOperationStatus.from_json(json)
# print the JSON string representation of the object
print(MediaGraphOperationStatus.to_json())

# convert the object into a dict
media_graph_operation_status_dict = media_graph_operation_status_instance.to_dict()
# create an instance of MediaGraphOperationStatus from a dict
media_graph_operation_status_from_dict = MediaGraphOperationStatus.from_dict(media_graph_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


