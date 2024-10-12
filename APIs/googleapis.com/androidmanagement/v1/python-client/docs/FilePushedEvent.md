# FilePushedEvent

A file was uploaded onto the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | The path of the file being pushed. | [optional] 

## Example

```python
from openapi_client.models.file_pushed_event import FilePushedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of FilePushedEvent from a JSON string
file_pushed_event_instance = FilePushedEvent.from_json(json)
# print the JSON string representation of the object
print(FilePushedEvent.to_json())

# convert the object into a dict
file_pushed_event_dict = file_pushed_event_instance.to_dict()
# create an instance of FilePushedEvent from a dict
file_pushed_event_from_dict = FilePushedEvent.from_dict(file_pushed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


