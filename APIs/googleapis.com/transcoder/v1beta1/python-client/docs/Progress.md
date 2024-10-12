# Progress

Estimated fractional progress for each step, from `0` to `1`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyzed** | **float** | Estimated fractional progress for &#x60;analyzing&#x60; step. | [optional] 
**encoded** | **float** | Estimated fractional progress for &#x60;encoding&#x60; step. | [optional] 
**notified** | **float** | Estimated fractional progress for &#x60;notifying&#x60; step. | [optional] 
**uploaded** | **float** | Estimated fractional progress for &#x60;uploading&#x60; step. | [optional] 

## Example

```python
from openapi_client.models.progress import Progress

# TODO update the JSON string below
json = "{}"
# create an instance of Progress from a JSON string
progress_instance = Progress.from_json(json)
# print the JSON string representation of the object
print(Progress.to_json())

# convert the object into a dict
progress_dict = progress_instance.to_dict()
# create an instance of Progress from a dict
progress_from_dict = Progress.from_dict(progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


