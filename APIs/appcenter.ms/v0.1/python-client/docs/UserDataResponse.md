# UserDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The url at which the user&#39;s avatar can be reached | [optional] 
**display_name** | **str** | The display name of the user | [optional] 
**id** | **str** | The unique id (UUID) of the user | [optional] 
**name** | **str** | The name of the user | [optional] 

## Example

```python
from openapi_client.models.user_data_response import UserDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserDataResponse from a JSON string
user_data_response_instance = UserDataResponse.from_json(json)
# print the JSON string representation of the object
print(UserDataResponse.to_json())

# convert the object into a dict
user_data_response_dict = user_data_response_instance.to_dict()
# create an instance of UserDataResponse from a dict
user_data_response_from_dict = UserDataResponse.from_dict(user_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


