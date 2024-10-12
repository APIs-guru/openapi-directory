# ComposerRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**TestComposerJsonComposerLockFileRequestFiles**](TestComposerJsonComposerLockFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.composer_request_payload import ComposerRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of ComposerRequestPayload from a JSON string
composer_request_payload_instance = ComposerRequestPayload.from_json(json)
# print the JSON string representation of the object
print(ComposerRequestPayload.to_json())

# convert the object into a dict
composer_request_payload_dict = composer_request_payload_instance.to_dict()
# create an instance of ComposerRequestPayload from a dict
composer_request_payload_from_dict = ComposerRequestPayload.from_dict(composer_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


