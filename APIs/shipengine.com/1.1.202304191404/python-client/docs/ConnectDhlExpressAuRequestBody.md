# ConnectDhlExpressAuRequestBody

A DHL Express AU account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_dhl_express_au_request_body import ConnectDhlExpressAuRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectDhlExpressAuRequestBody from a JSON string
connect_dhl_express_au_request_body_instance = ConnectDhlExpressAuRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectDhlExpressAuRequestBody.to_json())

# convert the object into a dict
connect_dhl_express_au_request_body_dict = connect_dhl_express_au_request_body_instance.to_dict()
# create an instance of ConnectDhlExpressAuRequestBody from a dict
connect_dhl_express_au_request_body_from_dict = ConnectDhlExpressAuRequestBody.from_dict(connect_dhl_express_au_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


