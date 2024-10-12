# CertChain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | **List[str]** | The certificates that form the CA chain, from leaf to root order. | [optional] 

## Example

```python
from openapi_client.models.cert_chain import CertChain

# TODO update the JSON string below
json = "{}"
# create an instance of CertChain from a JSON string
cert_chain_instance = CertChain.from_json(json)
# print the JSON string representation of the object
print(CertChain.to_json())

# convert the object into a dict
cert_chain_dict = cert_chain_instance.to_dict()
# create an instance of CertChain from a dict
cert_chain_from_dict = CertChain.from_dict(cert_chain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


