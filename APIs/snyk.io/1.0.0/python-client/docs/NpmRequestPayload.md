# NpmRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**TestPackageJsonPackageLockJsonFileRequestFiles**](TestPackageJsonPackageLockJsonFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.npm_request_payload import NpmRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of NpmRequestPayload from a JSON string
npm_request_payload_instance = NpmRequestPayload.from_json(json)
# print the JSON string representation of the object
print(NpmRequestPayload.to_json())

# convert the object into a dict
npm_request_payload_dict = npm_request_payload_instance.to_dict()
# create an instance of NpmRequestPayload from a dict
npm_request_payload_from_dict = NpmRequestPayload.from_dict(npm_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


