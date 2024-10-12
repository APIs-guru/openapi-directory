# ConnectSendleRequestBody

A Sendle account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API key | 
**nickname** | **str** | Nickname | 
**sendle_id** | **str** | A string that uniquely identifies the sendle | 

## Example

```python
from openapi_client.models.connect_sendle_request_body import ConnectSendleRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectSendleRequestBody from a JSON string
connect_sendle_request_body_instance = ConnectSendleRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectSendleRequestBody.to_json())

# convert the object into a dict
connect_sendle_request_body_dict = connect_sendle_request_body_instance.to_dict()
# create an instance of ConnectSendleRequestBody from a dict
connect_sendle_request_body_from_dict = ConnectSendleRequestBody.from_dict(connect_sendle_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


