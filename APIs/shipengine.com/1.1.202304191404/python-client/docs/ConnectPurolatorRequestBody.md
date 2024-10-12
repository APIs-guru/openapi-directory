# ConnectPurolatorRequestBody

A Purolator account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**activation_key** | **str** | Activation key | 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_purolator_request_body import ConnectPurolatorRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectPurolatorRequestBody from a JSON string
connect_purolator_request_body_instance = ConnectPurolatorRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectPurolatorRequestBody.to_json())

# convert the object into a dict
connect_purolator_request_body_dict = connect_purolator_request_body_instance.to_dict()
# create an instance of ConnectPurolatorRequestBody from a dict
connect_purolator_request_body_from_dict = ConnectPurolatorRequestBody.from_dict(connect_purolator_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


