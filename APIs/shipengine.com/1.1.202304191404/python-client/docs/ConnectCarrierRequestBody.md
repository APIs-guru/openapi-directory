# ConnectCarrierRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 
**username** | **str** | Username | 
**email** | **str** | The email address | 
**merchant_seller_id** | **str** |  | 
**mws_auth_token** | **str** |  | 
**auth_code** | **str** | Amazon UK Shipping auth code. | 
**account_number** | **str** | Account number | 
**ftp_password** | **str** | FTP password | 
**ftp_username** | **str** | FTP username | 
**api_key** | **str** | API key | 
**api_secret** | **str** | The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account.  | 
**contract_id** | **str** | Canada Post Account Contract ID | 
**ancillary_endorsement** | [**AncillaryServiceEndorsement**](AncillaryServiceEndorsement.md) |  | [optional] 
**client_id** | **str** | The client id | 
**distribution_center** | **str** | The distribution center | 
**pickup_number** | **str** | The pickup number | 
**registration_id** | **str** |  | [optional] 
**software_name** | **str** |  | [optional] 
**sold_to** | **str** | Sold To field | [optional] 
**country_code** | **str** | Country code | 
**site_id** | **str** | A string that uniquely identifies the site | 
**account** | **str** | Account | 
**passphrase** | **str** | Passphrase | 
**address1** | **str** | Address Line 1 | 
**address2** | **str** | Address Line 2 | [optional] 
**agree_to_eula** | **bool** | Boolean signaling agreement to the Fedex End User License Agreement | 
**city** | **str** | City | 
**company** | **str** | Company | 
**first_name** | **str** | First name | 
**last_name** | **str** | Last name | 
**meter_number** | **str** | Meter number | [optional] 
**phone** | **str** | Phone | 
**postal_code** | **str** | Postal code | 
**state** | **str** | State | 
**mailer_id** | **int** | Mailer id | 
**profile_name** | **str** | Profile name | [optional] 
**induction_site** | **str** | Induction site | 
**merchant_id** | **int** | Merchant id | [optional] 
**activation_key** | **str** | Activation key | 
**company_name** | **str** | Company name | [optional] 
**contact_name** | **str** | Contact name | 
**oba_email** | **str** | The oba email address | [optional] 
**street_line1** | **str** | Street line1 | [optional] 
**street_line2** | **str** | Street line2 | [optional] 
**street_line3** | **str** | Street line3 | [optional] 
**access_key** | **str** | Seko Account Access Key | 
**sendle_id** | **str** | A string that uniquely identifies the sendle | 
**account_country_code** | **str** | Account country code | 
**account_postal_code** | **str** | Account postal code | 
**agree_to_technology_agreement** | **bool** | The Agreement to the [UPS Technology Agreement](https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf) | 
**invoice** | [**UpsInvoice**](UpsInvoice.md) | The UPS invoice | [optional] 
**invoice_amount** | **float** | The invoice amount | [optional] 
**invoice_currency_code** | **str** | The invoice currency code | [optional] 
**title** | **str** | Title | [optional] 

## Example

```python
from openapi_client.models.connect_carrier_request_body import ConnectCarrierRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectCarrierRequestBody from a JSON string
connect_carrier_request_body_instance = ConnectCarrierRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectCarrierRequestBody.to_json())

# convert the object into a dict
connect_carrier_request_body_dict = connect_carrier_request_body_instance.to_dict()
# create an instance of ConnectCarrierRequestBody from a dict
connect_carrier_request_body_from_dict = ConnectCarrierRequestBody.from_dict(connect_carrier_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


