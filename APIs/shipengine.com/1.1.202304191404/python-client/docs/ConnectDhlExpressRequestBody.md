# ConnectDhlExpressRequestBody

A DHL express account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**country_code** | **str** | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | [optional] 
**nickname** | **str** | Nickname | 
**password** | **str** | Required if site id is provided | [optional] 
**site_id** | **str** | Required if password is provided | [optional] 

## Example

```python
from openapi_client.models.connect_dhl_express_request_body import ConnectDhlExpressRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectDhlExpressRequestBody from a JSON string
connect_dhl_express_request_body_instance = ConnectDhlExpressRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectDhlExpressRequestBody.to_json())

# convert the object into a dict
connect_dhl_express_request_body_dict = connect_dhl_express_request_body_instance.to_dict()
# create an instance of ConnectDhlExpressRequestBody from a dict
connect_dhl_express_request_body_from_dict = ConnectDhlExpressRequestBody.from_dict(connect_dhl_express_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


