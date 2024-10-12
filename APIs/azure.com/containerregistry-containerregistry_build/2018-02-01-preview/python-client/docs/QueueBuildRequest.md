# QueueBuildRequest

The queue build request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the build request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.queue_build_request import QueueBuildRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueueBuildRequest from a JSON string
queue_build_request_instance = QueueBuildRequest.from_json(json)
# print the JSON string representation of the object
print(QueueBuildRequest.to_json())

# convert the object into a dict
queue_build_request_dict = queue_build_request_instance.to_dict()
# create an instance of QueueBuildRequest from a dict
queue_build_request_from_dict = QueueBuildRequest.from_dict(queue_build_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


