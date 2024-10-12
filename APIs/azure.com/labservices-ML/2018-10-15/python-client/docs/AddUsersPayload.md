# AddUsersPayload

Payload for Add Users operation on a Lab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_addresses** | **List[str]** | List of user emails addresses to add to the lab. | 

## Example

```python
from openapi_client.models.add_users_payload import AddUsersPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AddUsersPayload from a JSON string
add_users_payload_instance = AddUsersPayload.from_json(json)
# print the JSON string representation of the object
print(AddUsersPayload.to_json())

# convert the object into a dict
add_users_payload_dict = add_users_payload_instance.to_dict()
# create an instance of AddUsersPayload from a dict
add_users_payload_from_dict = AddUsersPayload.from_dict(add_users_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


