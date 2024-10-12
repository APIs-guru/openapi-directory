# SslConfiguration

The SSL configuration for scoring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert** | **str** | Cert data | [optional] 
**cname** | **str** | CNAME of the cert | [optional] 
**key** | **str** | Key data | [optional] 
**status** | **str** | Enable or disable SSL for scoring | [optional] 

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


