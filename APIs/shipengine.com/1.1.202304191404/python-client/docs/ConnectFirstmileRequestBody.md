# ConnectFirstmileRequestBody

A First Mile account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mailer_id** | **str** | A string that uniquely identifies the mailer | 
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 
**profile_name** | **str** | Profile name | [optional] 

## Example

```python
from openapi_client.models.connect_firstmile_request_body import ConnectFirstmileRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectFirstmileRequestBody from a JSON string
connect_firstmile_request_body_instance = ConnectFirstmileRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectFirstmileRequestBody.to_json())

# convert the object into a dict
connect_firstmile_request_body_dict = connect_firstmile_request_body_instance.to_dict()
# create an instance of ConnectFirstmileRequestBody from a dict
connect_firstmile_request_body_from_dict = ConnectFirstmileRequestBody.from_dict(connect_firstmile_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


