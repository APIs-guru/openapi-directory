# OfflineUserAddressInfo

Identify a user by name and address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the address. | [optional] 
**country_code** | **str** | 2-letter country code in ISO-3166-1 alpha-2 of the user&#39;s address. | [optional] 
**hashed_first_name** | **str** | First name of the user, which is hashed as SHA-256 after normalized (Lowercase all characters; Remove any extra spaces before, after, and in between). | [optional] 
**hashed_last_name** | **str** | Last name of the user, which is hashed as SHA-256 after normalized (lower case only and no punctuation). | [optional] 
**hashed_street_address** | **str** | The street address of the user hashed using SHA-256 hash function after normalization (lower case only). | [optional] 
**postal_code** | **str** | Postal code of the user&#39;s address. | [optional] 
**state** | **str** | State code of the address. | [optional] 

## Example

```python
from openapi_client.models.offline_user_address_info import OfflineUserAddressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OfflineUserAddressInfo from a JSON string
offline_user_address_info_instance = OfflineUserAddressInfo.from_json(json)
# print the JSON string representation of the object
print(OfflineUserAddressInfo.to_json())

# convert the object into a dict
offline_user_address_info_dict = offline_user_address_info_instance.to_dict()
# create an instance of OfflineUserAddressInfo from a dict
offline_user_address_info_from_dict = OfflineUserAddressInfo.from_dict(offline_user_address_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


