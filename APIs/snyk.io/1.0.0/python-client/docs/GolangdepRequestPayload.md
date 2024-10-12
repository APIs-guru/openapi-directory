# GolangdepRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**TestGopkgTomlGopkgLockFileRequestFiles**](TestGopkgTomlGopkgLockFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.golangdep_request_payload import GolangdepRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GolangdepRequestPayload from a JSON string
golangdep_request_payload_instance = GolangdepRequestPayload.from_json(json)
# print the JSON string representation of the object
print(GolangdepRequestPayload.to_json())

# convert the object into a dict
golangdep_request_payload_dict = golangdep_request_payload_instance.to_dict()
# create an instance of GolangdepRequestPayload from a dict
golangdep_request_payload_from_dict = GolangdepRequestPayload.from_dict(golangdep_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


