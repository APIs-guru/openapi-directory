# ConnectUserRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.connect_user_request import ConnectUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectUserRequest from a JSON string
connect_user_request_instance = ConnectUserRequest.from_json(json)
# print the JSON string representation of the object
print(ConnectUserRequest.to_json())

# convert the object into a dict
connect_user_request_dict = connect_user_request_instance.to_dict()
# create an instance of ConnectUserRequest from a dict
connect_user_request_from_dict = ConnectUserRequest.from_dict(connect_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


