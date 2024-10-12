# WriteControl

Provides control over how write requests are executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_revision_id** | **str** | The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error. | [optional] 
**target_revision_id** | **str** | The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter. | [optional] 

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


