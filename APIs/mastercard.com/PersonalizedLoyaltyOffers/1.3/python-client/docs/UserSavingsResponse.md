# UserSavingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**SavingsResponse**](SavingsResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_savings_response import UserSavingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserSavingsResponse from a JSON string
user_savings_response_instance = UserSavingsResponse.from_json(json)
# print the JSON string representation of the object
print(UserSavingsResponse.to_json())

# convert the object into a dict
user_savings_response_dict = user_savings_response_instance.to_dict()
# create an instance of UserSavingsResponse from a dict
user_savings_response_from_dict = UserSavingsResponse.from_dict(user_savings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


