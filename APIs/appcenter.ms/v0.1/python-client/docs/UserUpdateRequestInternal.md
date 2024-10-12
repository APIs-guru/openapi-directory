# UserUpdateRequestInternal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email address for this user | [optional] 
**name** | **str** | The new, unique name that is used to identify. | [optional] 
**next_nps_survey_date** | **str** | The date in the future when the user should be checked again for NPS eligibility | [optional] 

## Example

```python
from openapi_client.models.user_update_request_internal import UserUpdateRequestInternal

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateRequestInternal from a JSON string
user_update_request_internal_instance = UserUpdateRequestInternal.from_json(json)
# print the JSON string representation of the object
print(UserUpdateRequestInternal.to_json())

# convert the object into a dict
user_update_request_internal_dict = user_update_request_internal_instance.to_dict()
# create an instance of UserUpdateRequestInternal from a dict
user_update_request_internal_from_dict = UserUpdateRequestInternal.from_dict(user_update_request_internal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


