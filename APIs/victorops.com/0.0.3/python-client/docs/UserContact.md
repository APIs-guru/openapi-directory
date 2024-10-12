# UserContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**ext_id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_contact import UserContact

# TODO update the JSON string below
json = "{}"
# create an instance of UserContact from a JSON string
user_contact_instance = UserContact.from_json(json)
# print the JSON string representation of the object
print(UserContact.to_json())

# convert the object into a dict
user_contact_dict = user_contact_instance.to_dict()
# create an instance of UserContact from a dict
user_contact_from_dict = UserContact.from_dict(user_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


