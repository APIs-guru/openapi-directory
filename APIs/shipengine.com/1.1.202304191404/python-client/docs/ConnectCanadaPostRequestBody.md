# ConnectCanadaPostRequestBody

A Canada Post account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Canada Post Account Number | 
**api_key** | **str** | Canada Post Account API Key | 
**api_secret** | **str** | Canada Post Account API Secret | 
**contract_id** | **str** | Canada Post Account Contract ID | 
**nickname** | **str** | Nickname | 

## Example

```python
from openapi_client.models.connect_canada_post_request_body import ConnectCanadaPostRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectCanadaPostRequestBody from a JSON string
connect_canada_post_request_body_instance = ConnectCanadaPostRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectCanadaPostRequestBody.to_json())

# convert the object into a dict
connect_canada_post_request_body_dict = connect_canada_post_request_body_instance.to_dict()
# create an instance of ConnectCanadaPostRequestBody from a dict
connect_canada_post_request_body_from_dict = ConnectCanadaPostRequestBody.from_dict(connect_canada_post_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


