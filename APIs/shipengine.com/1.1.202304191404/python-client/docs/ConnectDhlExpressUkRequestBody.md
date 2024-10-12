# ConnectDhlExpressUkRequestBody

A DHL Express UK account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 
**site_id** | **str** | A string that uniquely identifies the site | 

## Example

```python
from openapi_client.models.connect_dhl_express_uk_request_body import ConnectDhlExpressUkRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectDhlExpressUkRequestBody from a JSON string
connect_dhl_express_uk_request_body_instance = ConnectDhlExpressUkRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectDhlExpressUkRequestBody.to_json())

# convert the object into a dict
connect_dhl_express_uk_request_body_dict = connect_dhl_express_uk_request_body_instance.to_dict()
# create an instance of ConnectDhlExpressUkRequestBody from a dict
connect_dhl_express_uk_request_body_from_dict = ConnectDhlExpressUkRequestBody.from_dict(connect_dhl_express_uk_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


