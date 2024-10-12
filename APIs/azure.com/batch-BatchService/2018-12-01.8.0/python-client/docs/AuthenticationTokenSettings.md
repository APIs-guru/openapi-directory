# AuthenticationTokenSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **List[str]** | The authentication token grants access to a limited set of Batch service operations. Currently the only supported value for the access property is &#39;job&#39;, which grants access to all operations related to the job which contains the task. | [optional] 

## Example

```python
from openapi_client.models.authentication_token_settings import AuthenticationTokenSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationTokenSettings from a JSON string
authentication_token_settings_instance = AuthenticationTokenSettings.from_json(json)
# print the JSON string representation of the object
print(AuthenticationTokenSettings.to_json())

# convert the object into a dict
authentication_token_settings_dict = authentication_token_settings_instance.to_dict()
# create an instance of AuthenticationTokenSettings from a dict
authentication_token_settings_from_dict = AuthenticationTokenSettings.from_dict(authentication_token_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


