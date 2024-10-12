# GetInAppUpdateTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The api token generated will not be accessible again | 

## Example

```python
from openapi_client.models.get_in_app_update_token_response import GetInAppUpdateTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetInAppUpdateTokenResponse from a JSON string
get_in_app_update_token_response_instance = GetInAppUpdateTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GetInAppUpdateTokenResponse.to_json())

# convert the object into a dict
get_in_app_update_token_response_dict = get_in_app_update_token_response_instance.to_dict()
# create an instance of GetInAppUpdateTokenResponse from a dict
get_in_app_update_token_response_from_dict = GetInAppUpdateTokenResponse.from_dict(get_in_app_update_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


