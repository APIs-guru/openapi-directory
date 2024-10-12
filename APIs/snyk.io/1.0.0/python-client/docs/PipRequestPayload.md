# PipRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**TestRequirementsTxtFileRequestFiles**](TestRequirementsTxtFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.pip_request_payload import PipRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of PipRequestPayload from a JSON string
pip_request_payload_instance = PipRequestPayload.from_json(json)
# print the JSON string representation of the object
print(PipRequestPayload.to_json())

# convert the object into a dict
pip_request_payload_dict = pip_request_payload_instance.to_dict()
# create an instance of PipRequestPayload from a dict
pip_request_payload_from_dict = PipRequestPayload.from_dict(pip_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


