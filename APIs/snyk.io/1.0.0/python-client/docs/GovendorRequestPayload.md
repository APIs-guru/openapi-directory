# GovendorRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**TestVendorJsonFileRequestFiles**](TestVendorJsonFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.govendor_request_payload import GovendorRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GovendorRequestPayload from a JSON string
govendor_request_payload_instance = GovendorRequestPayload.from_json(json)
# print the JSON string representation of the object
print(GovendorRequestPayload.to_json())

# convert the object into a dict
govendor_request_payload_dict = govendor_request_payload_instance.to_dict()
# create an instance of GovendorRequestPayload from a dict
govendor_request_payload_from_dict = GovendorRequestPayload.from_dict(govendor_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


