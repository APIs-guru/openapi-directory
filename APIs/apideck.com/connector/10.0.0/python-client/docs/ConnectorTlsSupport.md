# ConnectorTlsSupport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the TLS support | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.connector_tls_support import ConnectorTlsSupport

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorTlsSupport from a JSON string
connector_tls_support_instance = ConnectorTlsSupport.from_json(json)
# print the JSON string representation of the object
print(ConnectorTlsSupport.to_json())

# convert the object into a dict
connector_tls_support_dict = connector_tls_support_instance.to_dict()
# create an instance of ConnectorTlsSupport from a dict
connector_tls_support_from_dict = ConnectorTlsSupport.from_dict(connector_tls_support_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


