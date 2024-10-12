# ConnectSekoRequestBody

A SEKO account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | Seko Account Access Key | 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_seko_request_body import ConnectSekoRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectSekoRequestBody from a JSON string
connect_seko_request_body_instance = ConnectSekoRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectSekoRequestBody.to_json())

# convert the object into a dict
connect_seko_request_body_dict = connect_seko_request_body_instance.to_dict()
# create an instance of ConnectSekoRequestBody from a dict
connect_seko_request_body_from_dict = ConnectSekoRequestBody.from_dict(connect_seko_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


