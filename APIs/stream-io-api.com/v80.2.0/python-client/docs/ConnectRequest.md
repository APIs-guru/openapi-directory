# ConnectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**DeviceFields**](DeviceFields.md) |  | [optional] 
**user_details** | [**UserObject**](UserObject.md) |  | 

## Example

```python
from openapi_client.models.connect_request import ConnectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectRequest from a JSON string
connect_request_instance = ConnectRequest.from_json(json)
# print the JSON string representation of the object
print(ConnectRequest.to_json())

# convert the object into a dict
connect_request_dict = connect_request_instance.to_dict()
# create an instance of ConnectRequest from a dict
connect_request_from_dict = ConnectRequest.from_dict(connect_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


