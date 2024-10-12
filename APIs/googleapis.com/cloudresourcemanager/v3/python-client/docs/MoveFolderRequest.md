# MoveFolderRequest

The MoveFolder request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_parent** | **str** | Required. The resource name of the folder or organization which should be the folder&#39;s new parent. Must be of the form &#x60;folders/{folder_id}&#x60; or &#x60;organizations/{org_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.move_folder_request import MoveFolderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveFolderRequest from a JSON string
move_folder_request_instance = MoveFolderRequest.from_json(json)
# print the JSON string representation of the object
print(MoveFolderRequest.to_json())

# convert the object into a dict
move_folder_request_dict = move_folder_request_instance.to_dict()
# create an instance of MoveFolderRequest from a dict
move_folder_request_from_dict = MoveFolderRequest.from_dict(move_folder_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


