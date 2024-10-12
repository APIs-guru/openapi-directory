# UserNameAvailabilityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | The availability status of the requested user name | 
**name** | **str** | The requested user name | 

## Example

```python
from openapi_client.models.user_name_availability_response import UserNameAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserNameAvailabilityResponse from a JSON string
user_name_availability_response_instance = UserNameAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(UserNameAvailabilityResponse.to_json())

# convert the object into a dict
user_name_availability_response_dict = user_name_availability_response_instance.to_dict()
# create an instance of UserNameAvailabilityResponse from a dict
user_name_availability_response_from_dict = UserNameAvailabilityResponse.from_dict(user_name_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


