# TrustStore

Defines a trust store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intermediate_cas** | [**List[IntermediateCA]**](IntermediateCA.md) | Set of intermediate CA certificates used for the path building phase of chain validation. The field is currently not supported if TrustConfig is used for the workload certificate feature. | [optional] 
**trust_anchors** | [**List[TrustAnchor]**](TrustAnchor.md) | List of Trust Anchors to be used while performing validation against a given TrustStore. | [optional] 

## Example

```python
from openapi_client.models.trust_store import TrustStore

# TODO update the JSON string below
json = "{}"
# create an instance of TrustStore from a JSON string
trust_store_instance = TrustStore.from_json(json)
# print the JSON string representation of the object
print(TrustStore.to_json())

# convert the object into a dict
trust_store_dict = trust_store_instance.to_dict()
# create an instance of TrustStore from a dict
trust_store_from_dict = TrustStore.from_dict(trust_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


