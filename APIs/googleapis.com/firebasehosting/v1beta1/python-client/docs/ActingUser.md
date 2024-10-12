# ActingUser

Contains metadata about the user who performed an action, such as creating a release or finalizing a version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the user when the user performed the action. | [optional] 
**image_url** | **str** | A profile image URL for the user. May not be present if the user has changed their email address or deleted their account. | [optional] 

## Example

```python
from openapi_client.models.acting_user import ActingUser

# TODO update the JSON string below
json = "{}"
# create an instance of ActingUser from a JSON string
acting_user_instance = ActingUser.from_json(json)
# print the JSON string representation of the object
print(ActingUser.to_json())

# convert the object into a dict
acting_user_dict = acting_user_instance.to_dict()
# create an instance of ActingUser from a dict
acting_user_from_dict = ActingUser.from_dict(acting_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


