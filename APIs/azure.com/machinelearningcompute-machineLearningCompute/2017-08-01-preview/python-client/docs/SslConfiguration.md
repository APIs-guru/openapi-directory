# SslConfiguration

SSL configuration. If configured data-plane calls to user services will be exposed over SSL only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert** | **str** | The SSL cert data in PEM format. | [optional] 
**cname** | **str** | The CName of the certificate. | [optional] 
**key** | **str** | The SSL key data in PEM format. This is not returned in response of GET/PUT on the resource. To see this please call listKeys API. | [optional] 
**status** | **str** | SSL status. Allowed values are Enabled and Disabled. | [optional] [default to 'Enabled']

## Example

```python
from openapi_client.models.ssl_configuration import SslConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SslConfiguration from a JSON string
ssl_configuration_instance = SslConfiguration.from_json(json)
# print the JSON string representation of the object
print(SslConfiguration.to_json())

# convert the object into a dict
ssl_configuration_dict = ssl_configuration_instance.to_dict()
# create an instance of SslConfiguration from a dict
ssl_configuration_from_dict = SslConfiguration.from_dict(ssl_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


