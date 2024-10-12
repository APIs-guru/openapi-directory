# ConnectStampsRequestBody

A Stamps account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 
**username** | **str** | Username | 

## Example

```python
from openapi_client.models.connect_stamps_request_body import ConnectStampsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectStampsRequestBody from a JSON string
connect_stamps_request_body_instance = ConnectStampsRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectStampsRequestBody.to_json())

# convert the object into a dict
connect_stamps_request_body_dict = connect_stamps_request_body_instance.to_dict()
# create an instance of ConnectStampsRequestBody from a dict
connect_stamps_request_body_from_dict = ConnectStampsRequestBody.from_dict(connect_stamps_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


