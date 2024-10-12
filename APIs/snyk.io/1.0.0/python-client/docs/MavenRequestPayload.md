# MavenRequestPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] 
**files** | [**MavenRequestPayloadFiles**](MavenRequestPayloadFiles.md) |  | 

## Example

```python
from openapi_client.models.maven_request_payload import MavenRequestPayload

# TODO update the JSON string below
json = "{}"
# create an instance of MavenRequestPayload from a JSON string
maven_request_payload_instance = MavenRequestPayload.from_json(json)
# print the JSON string representation of the object
print(MavenRequestPayload.to_json())

# convert the object into a dict
maven_request_payload_dict = maven_request_payload_instance.to_dict()
# create an instance of MavenRequestPayload from a dict
maven_request_payload_from_dict = MavenRequestPayload.from_dict(maven_request_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


