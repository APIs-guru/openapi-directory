# FilePulledEvent

A file was downloaded from the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | The path of the file being pulled. | [optional] 

## Example

```python
from openapi_client.models.file_pulled_event import FilePulledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of FilePulledEvent from a JSON string
file_pulled_event_instance = FilePulledEvent.from_json(json)
# print the JSON string representation of the object
print(FilePulledEvent.to_json())

# convert the object into a dict
file_pulled_event_dict = file_pulled_event_instance.to_dict()
# create an instance of FilePulledEvent from a dict
file_pulled_event_from_dict = FilePulledEvent.from_dict(file_pulled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


