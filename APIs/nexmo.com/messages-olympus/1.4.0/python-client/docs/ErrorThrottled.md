# ErrorThrottled


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_throttled import ErrorThrottled

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorThrottled from a JSON string
error_throttled_instance = ErrorThrottled.from_json(json)
# print the JSON string representation of the object
print(ErrorThrottled.to_json())

# convert the object into a dict
error_throttled_dict = error_throttled_instance.to_dict()
# create an instance of ErrorThrottled from a dict
error_throttled_from_dict = ErrorThrottled.from_dict(error_throttled_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


