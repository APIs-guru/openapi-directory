# AuthorizeRequest

Authorize request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_volume_resource_id** | **str** | Resource id | [optional] 

## Example

```python
from openapi_client.models.authorize_request import AuthorizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizeRequest from a JSON string
authorize_request_instance = AuthorizeRequest.from_json(json)
# print the JSON string representation of the object
print(AuthorizeRequest.to_json())

# convert the object into a dict
authorize_request_dict = authorize_request_instance.to_dict()
# create an instance of AuthorizeRequest from a dict
authorize_request_from_dict = AuthorizeRequest.from_dict(authorize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


