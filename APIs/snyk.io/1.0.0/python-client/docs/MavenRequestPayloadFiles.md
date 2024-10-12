# MavenRequestPayloadFiles

The manifest files:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional** | **List[object]** | additional manifest files (if needed), encoded according the the \&quot;encoding\&quot; field. | [optional] 
**target** | [**MavenFile**](MavenFile.md) |  | 

## Example

```python
from openapi_client.models.maven_request_payload_files import MavenRequestPayloadFiles

# TODO update the JSON string below
json = "{}"
# create an instance of MavenRequestPayloadFiles from a JSON string
maven_request_payload_files_instance = MavenRequestPayloadFiles.from_json(json)
# print the JSON string representation of the object
print(MavenRequestPayloadFiles.to_json())

# convert the object into a dict
maven_request_payload_files_dict = maven_request_payload_files_instance.to_dict()
# create an instance of MavenRequestPayloadFiles from a dict
maven_request_payload_files_from_dict = MavenRequestPayloadFiles.from_dict(maven_request_payload_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


