# ConnectDhlEcommerceRequestBody

A DHL Ecommerce account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | [optional] 
**ancillary_endorsement** | [**AncillaryServiceEndorsement**](AncillaryServiceEndorsement.md) |  | [optional] 
**api_key** | **str** | The DHL E-Commerce API key. This field is optional, but if not set you will not be able to get rates for this account.  | [optional] 
**api_secret** | **str** | The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account.  | [optional] 
**client_id** | **str** | The client id | 
**distribution_center** | **str** | The distribution center | 
**ftp_password** | **str** | FTP password | [optional] 
**ftp_username** | **str** | FTP username | [optional] 
**nickname** | **str** | A nickname to help you identify this account | 
**password** | **str** | The account password | 
**pickup_number** | **str** | The pickup number | 
**registration_id** | **str** |  | [optional] 
**software_name** | **str** |  | [optional] 
**sold_to** | **str** | Sold To field | [optional] 
**username** | **str** | The account username | 

## Example

```python
from openapi_client.models.connect_dhl_ecommerce_request_body import ConnectDhlEcommerceRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectDhlEcommerceRequestBody from a JSON string
connect_dhl_ecommerce_request_body_instance = ConnectDhlEcommerceRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectDhlEcommerceRequestBody.to_json())

# convert the object into a dict
connect_dhl_ecommerce_request_body_dict = connect_dhl_ecommerce_request_body_instance.to_dict()
# create an instance of ConnectDhlEcommerceRequestBody from a dict
connect_dhl_ecommerce_request_body_from_dict = ConnectDhlEcommerceRequestBody.from_dict(connect_dhl_ecommerce_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


