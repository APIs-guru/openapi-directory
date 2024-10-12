# SubordinateConfigChain

This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_certificates** | **List[str]** | Required. Expected to be in leaf-to-root order according to RFC 5246. | [optional] 

## Example

```python
from openapi_client.models.subordinate_config_chain import SubordinateConfigChain

# TODO update the JSON string below
json = "{}"
# create an instance of SubordinateConfigChain from a JSON string
subordinate_config_chain_instance = SubordinateConfigChain.from_json(json)
# print the JSON string representation of the object
print(SubordinateConfigChain.to_json())

# convert the object into a dict
subordinate_config_chain_dict = subordinate_config_chain_instance.to_dict()
# create an instance of SubordinateConfigChain from a dict
subordinate_config_chain_from_dict = SubordinateConfigChain.from_dict(subordinate_config_chain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


