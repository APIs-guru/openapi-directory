# ConnectUpsRequestBody

A UPS account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_country_code** | **str** | Account country code | 
**account_number** | **str** | Account number | 
**account_postal_code** | **str** | Account postal code | 
**address1** | **str** | Address Line 1 | 
**address2** | **str** | Address Line 2 | [optional] 
**agree_to_technology_agreement** | **bool** | The Agreement to the [UPS Technology Agreement](https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf) | 
**city** | **str** | City | 
**company** | **str** | Company | 
**country_code** | **str** | Country code | 
**email** | **str** | The email address | 
**first_name** | **str** | First name | 
**invoice** | [**UpsInvoice**](UpsInvoice.md) | The UPS invoice | [optional] 
**invoice_amount** | **float** | The invoice amount | [optional] 
**invoice_currency_code** | **str** | The invoice currency code | [optional] 
**last_name** | **str** | Last name | 
**nickname** | **str** | Nickname | 
**phone** | **str** | Phone | 
**postal_code** | **str** | Postal code | 
**state** | **str** | State | 
**title** | **str** | Title | [optional] 

## Example

```python
from openapi_client.models.connect_ups_request_body import ConnectUpsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectUpsRequestBody from a JSON string
connect_ups_request_body_instance = ConnectUpsRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectUpsRequestBody.to_json())

# convert the object into a dict
connect_ups_request_body_dict = connect_ups_request_body_instance.to_dict()
# create an instance of ConnectUpsRequestBody from a dict
connect_ups_request_body_from_dict = ConnectUpsRequestBody.from_dict(connect_ups_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


