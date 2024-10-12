# SslCertsInsertRequest

SslCerts insert request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_name** | **str** | User supplied name. Must be a distinct name from the other certificates for this instance. | [optional] 

## Example

```python
from openapi_client.models.ssl_certs_insert_request import SslCertsInsertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SslCertsInsertRequest from a JSON string
ssl_certs_insert_request_instance = SslCertsInsertRequest.from_json(json)
# print the JSON string representation of the object
print(SslCertsInsertRequest.to_json())

# convert the object into a dict
ssl_certs_insert_request_dict = ssl_certs_insert_request_instance.to_dict()
# create an instance of SslCertsInsertRequest from a dict
ssl_certs_insert_request_from_dict = SslCertsInsertRequest.from_dict(ssl_certs_insert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


