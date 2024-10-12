# SbtRequestPayloadFiles

The manifest files:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | [**SBTFile**](SBTFile.md) |  | 

## Example

```python
from openapi_client.models.sbt_request_payload_files import SbtRequestPayloadFiles

# TODO update the JSON string below
json = "{}"
# create an instance of SbtRequestPayloadFiles from a JSON string
sbt_request_payload_files_instance = SbtRequestPayloadFiles.from_json(json)
# print the JSON string representation of the object
print(SbtRequestPayloadFiles.to_json())

# convert the object into a dict
sbt_request_payload_files_dict = sbt_request_payload_files_instance.to_dict()
# create an instance of SbtRequestPayloadFiles from a dict
sbt_request_payload_files_from_dict = SbtRequestPayloadFiles.from_dict(sbt_request_payload_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


