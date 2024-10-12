# ConnectRrDonnelleyRequestBody

A RR Donnelley account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 
**username** | **str** | Username | 

## Example

```python
from openapi_client.models.connect_rr_donnelley_request_body import ConnectRrDonnelleyRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectRrDonnelleyRequestBody from a JSON string
connect_rr_donnelley_request_body_instance = ConnectRrDonnelleyRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectRrDonnelleyRequestBody.to_json())

# convert the object into a dict
connect_rr_donnelley_request_body_dict = connect_rr_donnelley_request_body_instance.to_dict()
# create an instance of ConnectRrDonnelleyRequestBody from a dict
connect_rr_donnelley_request_body_from_dict = ConnectRrDonnelleyRequestBody.from_dict(connect_rr_donnelley_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


