# ProfileToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | single use token associated with this account. alphanumeric(36) | [optional] 
**name** | **str** | Name of cardholder. alphanumeric(64) | [optional] 

## Example

```python
from openapi_client.models.profile_token import ProfileToken

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileToken from a JSON string
profile_token_instance = ProfileToken.from_json(json)
# print the JSON string representation of the object
print(ProfileToken.to_json())

# convert the object into a dict
profile_token_dict = profile_token_instance.to_dict()
# create an instance of ProfileToken from a dict
profile_token_from_dict = ProfileToken.from_dict(profile_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


