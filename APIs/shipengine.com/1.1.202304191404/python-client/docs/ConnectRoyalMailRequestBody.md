# ConnectRoyalMailRequestBody

A Royal Mail account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**city** | **str** | City | 
**company_name** | **str** | Company name | [optional] 
**contact_name** | **str** | Contact name | 
**email** | **str** | The email address | [optional] 
**nickname** | **str** | Nickname | 
**oba_email** | **str** | The oba email address | [optional] 
**phone** | **str** | Phone | [optional] 
**postal_code** | **str** | Postal code | 
**street_line1** | **str** | Street line1 | [optional] 
**street_line2** | **str** | Street line2 | [optional] 
**street_line3** | **str** | Street line3 | [optional] 

## Example

```python
from openapi_client.models.connect_royal_mail_request_body import ConnectRoyalMailRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectRoyalMailRequestBody from a JSON string
connect_royal_mail_request_body_instance = ConnectRoyalMailRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectRoyalMailRequestBody.to_json())

# convert the object into a dict
connect_royal_mail_request_body_dict = connect_royal_mail_request_body_instance.to_dict()
# create an instance of ConnectRoyalMailRequestBody from a dict
connect_royal_mail_request_body_from_dict = ConnectRoyalMailRequestBody.from_dict(connect_royal_mail_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


