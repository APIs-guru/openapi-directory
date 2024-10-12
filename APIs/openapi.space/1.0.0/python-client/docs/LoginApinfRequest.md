# LoginApinfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.login_apinf_request import LoginApinfRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LoginApinfRequest from a JSON string
login_apinf_request_instance = LoginApinfRequest.from_json(json)
# print the JSON string representation of the object
print(LoginApinfRequest.to_json())

# convert the object into a dict
login_apinf_request_dict = login_apinf_request_instance.to_dict()
# create an instance of LoginApinfRequest from a dict
login_apinf_request_from_dict = LoginApinfRequest.from_dict(login_apinf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


