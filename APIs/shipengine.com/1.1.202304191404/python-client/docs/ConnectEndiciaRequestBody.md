# ConnectEndiciaRequestBody

An Endicia account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Account | 
**nickname** | **str** | Nickname | 
**passphrase** | **str** | Passphrase | 

## Example

```python
from openapi_client.models.connect_endicia_request_body import ConnectEndiciaRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectEndiciaRequestBody from a JSON string
connect_endicia_request_body_instance = ConnectEndiciaRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectEndiciaRequestBody.to_json())

# convert the object into a dict
connect_endicia_request_body_dict = connect_endicia_request_body_instance.to_dict()
# create an instance of ConnectEndiciaRequestBody from a dict
connect_endicia_request_body_from_dict = ConnectEndiciaRequestBody.from_dict(connect_endicia_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


