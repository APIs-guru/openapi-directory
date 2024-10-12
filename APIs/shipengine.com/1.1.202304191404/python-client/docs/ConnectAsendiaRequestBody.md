# ConnectAsendiaRequestBody

An Asendia account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Asendia account number | 
**ftp_password** | **str** | FTP password | 
**ftp_username** | **str** | FTP username | 
**nickname** | **str** | The nickname of the Asendia account | 

## Example

```python
from openapi_client.models.connect_asendia_request_body import ConnectAsendiaRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectAsendiaRequestBody from a JSON string
connect_asendia_request_body_instance = ConnectAsendiaRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectAsendiaRequestBody.to_json())

# convert the object into a dict
connect_asendia_request_body_dict = connect_asendia_request_body_instance.to_dict()
# create an instance of ConnectAsendiaRequestBody from a dict
connect_asendia_request_body_from_dict = ConnectAsendiaRequestBody.from_dict(connect_asendia_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


