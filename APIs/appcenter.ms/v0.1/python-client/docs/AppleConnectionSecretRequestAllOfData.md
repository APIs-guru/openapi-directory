# AppleConnectionSecretRequestAllOfData

shared connection details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | password to connect to shared connection. | [optional] 
**username** | **str** | username to connect to shared connection. | [optional] 

## Example

```python
from openapi_client.models.apple_connection_secret_request_all_of_data import AppleConnectionSecretRequestAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of AppleConnectionSecretRequestAllOfData from a JSON string
apple_connection_secret_request_all_of_data_instance = AppleConnectionSecretRequestAllOfData.from_json(json)
# print the JSON string representation of the object
print(AppleConnectionSecretRequestAllOfData.to_json())

# convert the object into a dict
apple_connection_secret_request_all_of_data_dict = apple_connection_secret_request_all_of_data_instance.to_dict()
# create an instance of AppleConnectionSecretRequestAllOfData from a dict
apple_connection_secret_request_all_of_data_from_dict = AppleConnectionSecretRequestAllOfData.from_dict(apple_connection_secret_request_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


