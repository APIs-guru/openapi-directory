# UserIdentifier

User identifying information. Exactly one type of identifier must be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_info** | [**OfflineUserAddressInfo**](OfflineUserAddressInfo.md) |  | [optional] 
**hashed_email** | **str** | Hashed email address using SHA-256 hash function after normalization. | [optional] 
**hashed_phone_number** | **str** | Hashed phone number using SHA-256 hash function after normalization (E164 standard). | [optional] 

## Example

```python
from openapi_client.models.user_identifier import UserIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentifier from a JSON string
user_identifier_instance = UserIdentifier.from_json(json)
# print the JSON string representation of the object
print(UserIdentifier.to_json())

# convert the object into a dict
user_identifier_dict = user_identifier_instance.to_dict()
# create an instance of UserIdentifier from a dict
user_identifier_from_dict = UserIdentifier.from_dict(user_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


