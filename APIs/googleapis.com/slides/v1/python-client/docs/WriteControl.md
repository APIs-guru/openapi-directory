# WriteControl

Provides control over how write requests are executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_revision_id** | **str** | The revision ID of the presentation required for the write request. If specified and the required revision ID doesn&#39;t match the presentation&#39;s current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied. | [optional] 

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


