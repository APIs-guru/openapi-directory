# ConnectImexRequestBody

An Imex account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 
**username** | **str** | Username | 

## Example

```python
from openapi_client.models.connect_imex_request_body import ConnectImexRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectImexRequestBody from a JSON string
connect_imex_request_body_instance = ConnectImexRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectImexRequestBody.to_json())

# convert the object into a dict
connect_imex_request_body_dict = connect_imex_request_body_instance.to_dict()
# create an instance of ConnectImexRequestBody from a dict
connect_imex_request_body_from_dict = ConnectImexRequestBody.from_dict(connect_imex_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


