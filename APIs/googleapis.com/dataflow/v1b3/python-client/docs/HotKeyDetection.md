# HotKeyDetection

Proto describing a hot key detected on a given WorkItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hot_key_age** | **str** | The age of the hot key measured from when it was first detected. | [optional] 
**system_name** | **str** | System-defined name of the step containing this hot key. Unique across the workflow. | [optional] 
**user_step_name** | **str** | User-provided name of the step that contains this hot key. | [optional] 

## Example

```python
from openapi_client.models.hot_key_detection import HotKeyDetection

# TODO update the JSON string below
json = "{}"
# create an instance of HotKeyDetection from a JSON string
hot_key_detection_instance = HotKeyDetection.from_json(json)
# print the JSON string representation of the object
print(HotKeyDetection.to_json())

# convert the object into a dict
hot_key_detection_dict = hot_key_detection_instance.to_dict()
# create an instance of HotKeyDetection from a dict
hot_key_detection_from_dict = HotKeyDetection.from_dict(hot_key_detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


