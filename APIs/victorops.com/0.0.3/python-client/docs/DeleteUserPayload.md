# DeleteUserPayload

The information about what to do with the deleted user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacement** | **str** | The user to take the place of the deleted user in escalations | [optional] 

## Example

```python
from openapi_client.models.delete_user_payload import DeleteUserPayload

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteUserPayload from a JSON string
delete_user_payload_instance = DeleteUserPayload.from_json(json)
# print the JSON string representation of the object
print(DeleteUserPayload.to_json())

# convert the object into a dict
delete_user_payload_dict = delete_user_payload_instance.to_dict()
# create an instance of DeleteUserPayload from a dict
delete_user_payload_from_dict = DeleteUserPayload.from_dict(delete_user_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


