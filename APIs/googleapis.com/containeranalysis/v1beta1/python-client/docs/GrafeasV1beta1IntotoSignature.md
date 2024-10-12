# GrafeasV1beta1IntotoSignature

A signature object consists of the KeyID used and the signature itself.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyid** | **str** |  | [optional] 
**sig** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1beta1_intoto_signature import GrafeasV1beta1IntotoSignature

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1beta1IntotoSignature from a JSON string
grafeas_v1beta1_intoto_signature_instance = GrafeasV1beta1IntotoSignature.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1beta1IntotoSignature.to_json())

# convert the object into a dict
grafeas_v1beta1_intoto_signature_dict = grafeas_v1beta1_intoto_signature_instance.to_dict()
# create an instance of GrafeasV1beta1IntotoSignature from a dict
grafeas_v1beta1_intoto_signature_from_dict = GrafeasV1beta1IntotoSignature.from_dict(grafeas_v1beta1_intoto_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


