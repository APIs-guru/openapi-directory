# ConnectDhlExpressCaRequestBody

A DHL Express CA account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_dhl_express_ca_request_body import ConnectDhlExpressCaRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectDhlExpressCaRequestBody from a JSON string
connect_dhl_express_ca_request_body_instance = ConnectDhlExpressCaRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectDhlExpressCaRequestBody.to_json())

# convert the object into a dict
connect_dhl_express_ca_request_body_dict = connect_dhl_express_ca_request_body_instance.to_dict()
# create an instance of ConnectDhlExpressCaRequestBody from a dict
connect_dhl_express_ca_request_body_from_dict = ConnectDhlExpressCaRequestBody.from_dict(connect_dhl_express_ca_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


