# ConnectFedexUkRequestBody

A Fedex UK account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**address1** | **str** | Address | 
**address2** | **str** | Address | [optional] 
**agree_to_eula** | **bool** | Boolean signaling agreement to the Fedex End User License Agreement | 
**city** | **str** | The city | 
**company** | **str** | The company | [optional] 
**country_code** | **str** | Country code | 
**email** | **str** | The email address | 
**first_name** | **str** | First name | 
**last_name** | **str** | Last name | 
**meter_number** | **str** | Meter number | [optional] 
**nickname** | **str** | Nickname | 
**phone** | **str** | Phone number | 
**postal_code** | **str** | Postal Code | 
**state** | **str** | State | 

## Example

```python
from openapi_client.models.connect_fedex_uk_request_body import ConnectFedexUkRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectFedexUkRequestBody from a JSON string
connect_fedex_uk_request_body_instance = ConnectFedexUkRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectFedexUkRequestBody.to_json())

# convert the object into a dict
connect_fedex_uk_request_body_dict = connect_fedex_uk_request_body_instance.to_dict()
# create an instance of ConnectFedexUkRequestBody from a dict
connect_fedex_uk_request_body_from_dict = ConnectFedexUkRequestBody.from_dict(connect_fedex_uk_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


