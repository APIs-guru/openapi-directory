# WriteControl

Provides control over how write requests are executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_revision_id** | **str** | The optional revision ID of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied. | [optional] 
**target_revision_id** | **str** | The optional target revision ID of the document the write request is applied to. If collaborator changes have occurred after the document was read using the API, the changes produced by this write request are applied against the collaborator changes. This results in a new revision of the document that incorporates both the collaborator changes and the changes in the request, with the Docs server resolving conflicting changes. When using target revision ID, the API client can be thought of as another collaborator of the document. The target revision ID can only be used to write to recent versions of a document. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 bad request error. The request should be tried again after retrieving the latest version of the document. Usually a revision ID remains valid for use as a target revision for several minutes after it&#39;s read, but for frequently edited documents this window might be shorter. | [optional] 

## Example

```python
from openapi_client.models.write_control import WriteControl

# TODO update the JSON string below
json = "{}"
# create an instance of WriteControl from a JSON string
write_control_instance = WriteControl.from_json(json)
# print the JSON string representation of the object
print(WriteControl.to_json())

# convert the object into a dict
write_control_dict = write_control_instance.to_dict()
# create an instance of WriteControl from a dict
write_control_from_dict = WriteControl.from_dict(write_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


