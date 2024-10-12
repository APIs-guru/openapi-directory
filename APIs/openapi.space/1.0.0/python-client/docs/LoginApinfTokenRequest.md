# LoginApinfTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** |  | 
**user_id** | **str** |  | 

## Example

```python
from openapi_client.models.login_apinf_token_request import LoginApinfTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LoginApinfTokenRequest from a JSON string
login_apinf_token_request_instance = LoginApinfTokenRequest.from_json(json)
# print the JSON string representation of the object
print(LoginApinfTokenRequest.to_json())

# convert the object into a dict
login_apinf_token_request_dict = login_apinf_token_request_instance.to_dict()
# create an instance of LoginApinfTokenRequest from a dict
login_apinf_token_request_from_dict = LoginApinfTokenRequest.from_dict(login_apinf_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


