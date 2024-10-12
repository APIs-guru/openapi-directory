# RubygemsRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**TestGemfileLockFileRequestFiles**](TestGemfileLockFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.rubygems_request_payload import RubygemsRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of RubygemsRequestPayload from a JSON string
rubygems_request_payload_instance = RubygemsRequestPayload.from_json(json)
# print the JSON string representation of the object
print(RubygemsRequestPayload.to_json())

# convert the object into a dict
rubygems_request_payload_dict = rubygems_request_payload_instance.to_dict()
# create an instance of RubygemsRequestPayload from a dict
rubygems_request_payload_from_dict = RubygemsRequestPayload.from_dict(rubygems_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


