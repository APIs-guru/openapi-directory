# Get2UsersByResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_by_response import Get2UsersByResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersByResponse from a JSON string
get2_users_by_response_instance = Get2UsersByResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersByResponse.to_json())

# convert the object into a dict
get2_users_by_response_dict = get2_users_by_response_instance.to_dict()
# create an instance of Get2UsersByResponse from a dict
get2_users_by_response_from_dict = Get2UsersByResponse.from_dict(get2_users_by_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


