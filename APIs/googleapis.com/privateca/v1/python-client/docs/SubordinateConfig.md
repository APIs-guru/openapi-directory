# SubordinateConfig

Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_authority** | **str** | Required. This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format &#x60;projects/*/locations/*/caPools/*/certificateAuthorities/*&#x60;. | [optional] 
**pem_issuer_chain** | [**SubordinateConfigChain**](SubordinateConfigChain.md) |  | [optional] 

## Example

```python
from openapi_client.models.subordinate_config import SubordinateConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SubordinateConfig from a JSON string
subordinate_config_instance = SubordinateConfig.from_json(json)
# print the JSON string representation of the object
print(SubordinateConfig.to_json())

# convert the object into a dict
subordinate_config_dict = subordinate_config_instance.to_dict()
# create an instance of SubordinateConfig from a dict
subordinate_config_from_dict = SubordinateConfig.from_dict(subordinate_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


