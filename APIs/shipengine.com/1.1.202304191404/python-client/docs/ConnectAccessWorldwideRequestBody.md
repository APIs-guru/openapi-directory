# ConnectAccessWorldwideRequestBody

An Access Worldwide account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | The nickname associated with the carrier connection | 
**password** | **str** | Access Worldwide Password | 
**username** | **str** | Access Worldwide Username | 

## Example

```python
from openapi_client.models.connect_access_worldwide_request_body import ConnectAccessWorldwideRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectAccessWorldwideRequestBody from a JSON string
connect_access_worldwide_request_body_instance = ConnectAccessWorldwideRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectAccessWorldwideRequestBody.to_json())

# convert the object into a dict
connect_access_worldwide_request_body_dict = connect_access_worldwide_request_body_instance.to_dict()
# create an instance of ConnectAccessWorldwideRequestBody from a dict
connect_access_worldwide_request_body_from_dict = ConnectAccessWorldwideRequestBody.from_dict(connect_access_worldwide_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


