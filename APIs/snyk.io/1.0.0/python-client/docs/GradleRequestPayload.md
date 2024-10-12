# GradleRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**GradleRequestPayloadFiles**](GradleRequestPayloadFiles.md) |  | 

## Example

```python
from openapi_client.models.gradle_request_payload import GradleRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GradleRequestPayload from a JSON string
gradle_request_payload_instance = GradleRequestPayload.from_json(json)
# print the JSON string representation of the object
print(GradleRequestPayload.to_json())

# convert the object into a dict
gradle_request_payload_dict = gradle_request_payload_instance.to_dict()
# create an instance of GradleRequestPayload from a dict
gradle_request_payload_from_dict = GradleRequestPayload.from_dict(gradle_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


