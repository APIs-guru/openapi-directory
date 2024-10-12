# ServerCertificateCommonNames

Describes a list of server certificates referenced by common name that are used to secure the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_names** | [**List[ServerCertificateCommonName]**](ServerCertificateCommonName.md) | The list of server certificates referenced by common name that are used to secure the cluster. | [optional] 
**x509_store_name** | [**StoreName**](StoreName.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_certificate_common_names import ServerCertificateCommonNames

# TODO update the JSON string below
json = "{}"
# create an instance of ServerCertificateCommonNames from a JSON string
server_certificate_common_names_instance = ServerCertificateCommonNames.from_json(json)
# print the JSON string representation of the object
print(ServerCertificateCommonNames.to_json())

# convert the object into a dict
server_certificate_common_names_dict = server_certificate_common_names_instance.to_dict()
# create an instance of ServerCertificateCommonNames from a dict
server_certificate_common_names_from_dict = ServerCertificateCommonNames.from_dict(server_certificate_common_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


