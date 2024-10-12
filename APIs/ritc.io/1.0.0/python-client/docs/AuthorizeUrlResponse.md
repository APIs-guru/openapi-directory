# AuthorizeUrlResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.authorize_url_response import AuthorizeUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizeUrlResponse from a JSON string
authorize_url_response_instance = AuthorizeUrlResponse.from_json(json)
# print the JSON string representation of the object
print(AuthorizeUrlResponse.to_json())

# convert the object into a dict
authorize_url_response_dict = authorize_url_response_instance.to_dict()
# create an instance of AuthorizeUrlResponse from a dict
authorize_url_response_from_dict = AuthorizeUrlResponse.from_dict(authorize_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


