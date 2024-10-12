# ListFollowedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListFollowedResponseData**](ListFollowedResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_followed_response import ListFollowedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFollowedResponse from a JSON string
list_followed_response_instance = ListFollowedResponse.from_json(json)
# print the JSON string representation of the object
print(ListFollowedResponse.to_json())

# convert the object into a dict
list_followed_response_dict = list_followed_response_instance.to_dict()
# create an instance of ListFollowedResponse from a dict
list_followed_response_from_dict = ListFollowedResponse.from_dict(list_followed_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


