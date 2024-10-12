# ProfileFromToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The token received from the client-side tokenization service. alphanumeric(64) | 
**name** | **str** | alphanumeric(64) | 

## Example

```python
from openapi_client.models.profile_from_token import ProfileFromToken

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileFromToken from a JSON string
profile_from_token_instance = ProfileFromToken.from_json(json)
# print the JSON string representation of the object
print(ProfileFromToken.to_json())

# convert the object into a dict
profile_from_token_dict = profile_from_token_instance.to_dict()
# create an instance of ProfileFromToken from a dict
profile_from_token_from_dict = ProfileFromToken.from_dict(profile_from_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


