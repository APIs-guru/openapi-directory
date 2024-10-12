# ConnectApcRequestBody

An APC account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | The nickname for the APC account | 
**password** | **str** | The password for the APC account | 
**username** | **str** | The username for the APC account | 

## Example

```python
from openapi_client.models.connect_apc_request_body import ConnectApcRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectApcRequestBody from a JSON string
connect_apc_request_body_instance = ConnectApcRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectApcRequestBody.to_json())

# convert the object into a dict
connect_apc_request_body_dict = connect_apc_request_body_instance.to_dict()
# create an instance of ConnectApcRequestBody from a dict
connect_apc_request_body_from_dict = ConnectApcRequestBody.from_dict(connect_apc_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


