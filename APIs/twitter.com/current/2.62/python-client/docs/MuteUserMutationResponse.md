# MuteUserMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**MuteUserMutationResponseData**](MuteUserMutationResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.mute_user_mutation_response import MuteUserMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MuteUserMutationResponse from a JSON string
mute_user_mutation_response_instance = MuteUserMutationResponse.from_json(json)
# print the JSON string representation of the object
print(MuteUserMutationResponse.to_json())

# convert the object into a dict
mute_user_mutation_response_dict = mute_user_mutation_response_instance.to_dict()
# create an instance of MuteUserMutationResponse from a dict
mute_user_mutation_response_from_dict = MuteUserMutationResponse.from_dict(mute_user_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


