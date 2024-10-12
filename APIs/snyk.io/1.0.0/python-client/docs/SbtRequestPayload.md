# SbtRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**SbtRequestPayloadFiles**](SbtRequestPayloadFiles.md) |  | 

## Example

```python
from openapi_client.models.sbt_request_payload import SbtRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of SbtRequestPayload from a JSON string
sbt_request_payload_instance = SbtRequestPayload.from_json(json)
# print the JSON string representation of the object
print(SbtRequestPayload.to_json())

# convert the object into a dict
sbt_request_payload_dict = sbt_request_payload_instance.to_dict()
# create an instance of SbtRequestPayload from a dict
sbt_request_payload_from_dict = SbtRequestPayload.from_dict(sbt_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


