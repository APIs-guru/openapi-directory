# GradleRequestPayloadFiles

The manifest files:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | [**GradleFile**](GradleFile.md) |  | 

## Example

```python
from openapi_client.models.gradle_request_payload_files import GradleRequestPayloadFiles

# TODO update the JSON string below
json = "{}"
# create an instance of GradleRequestPayloadFiles from a JSON string
gradle_request_payload_files_instance = GradleRequestPayloadFiles.from_json(json)
# print the JSON string representation of the object
print(GradleRequestPayloadFiles.to_json())

# convert the object into a dict
gradle_request_payload_files_dict = gradle_request_payload_files_instance.to_dict()
# create an instance of GradleRequestPayloadFiles from a dict
gradle_request_payload_files_from_dict = GradleRequestPayloadFiles.from_dict(gradle_request_payload_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


