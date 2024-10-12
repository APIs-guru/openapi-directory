# Get2UsersMeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**User**](User.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_me_response import Get2UsersMeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersMeResponse from a JSON string
get2_users_me_response_instance = Get2UsersMeResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersMeResponse.to_json())

# convert the object into a dict
get2_users_me_response_dict = get2_users_me_response_instance.to_dict()
# create an instance of Get2UsersMeResponse from a dict
get2_users_me_response_from_dict = Get2UsersMeResponse.from_dict(get2_users_me_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


