# TrustAnchor

Defines a trust anchor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_certificate** | **str** | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. | [optional] 

## Example

```python
from openapi_client.models.trust_anchor import TrustAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of TrustAnchor from a JSON string
trust_anchor_instance = TrustAnchor.from_json(json)
# print the JSON string representation of the object
print(TrustAnchor.to_json())

# convert the object into a dict
trust_anchor_dict = trust_anchor_instance.to_dict()
# create an instance of TrustAnchor from a dict
trust_anchor_from_dict = TrustAnchor.from_dict(trust_anchor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


