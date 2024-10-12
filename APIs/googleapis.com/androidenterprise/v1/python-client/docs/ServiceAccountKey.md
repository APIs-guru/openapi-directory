# ServiceAccountKey

Credentials that can be used to authenticate as a service account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google. | [optional] 
**id** | **str** | An opaque, unique identifier for this ServiceAccountKey. Assigned by the server. | [optional] 
**public_data** | **str** | Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file. | [optional] 
**type** | **str** | The file format of the generated key data. | [optional] 

## Example

```python
from openapi_client.models.service_account_key import ServiceAccountKey

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccountKey from a JSON string
service_account_key_instance = ServiceAccountKey.from_json(json)
# print the JSON string representation of the object
print(ServiceAccountKey.to_json())

# convert the object into a dict
service_account_key_dict = service_account_key_instance.to_dict()
# create an instance of ServiceAccountKey from a dict
service_account_key_from_dict = ServiceAccountKey.from_dict(service_account_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


