# ConnectAustraliaPostRequestBody

An Australia Post account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**api_key** | **str** | API key | 
**api_secret** | **str** | API secret | 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_australia_post_request_body import ConnectAustraliaPostRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectAustraliaPostRequestBody from a JSON string
connect_australia_post_request_body_instance = ConnectAustraliaPostRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectAustraliaPostRequestBody.to_json())

# convert the object into a dict
connect_australia_post_request_body_dict = connect_australia_post_request_body_instance.to_dict()
# create an instance of ConnectAustraliaPostRequestBody from a dict
connect_australia_post_request_body_from_dict = ConnectAustraliaPostRequestBody.from_dict(connect_australia_post_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


