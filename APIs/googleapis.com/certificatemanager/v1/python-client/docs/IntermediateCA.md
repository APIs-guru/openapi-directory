# IntermediateCA

Defines an intermediate CA.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_certificate** | **str** | PEM intermediate certificate used for building up paths for validation. Each certificate provided in PEM format may occupy up to 5kB. | [optional] 

## Example

```python
from openapi_client.models.intermediate_ca import IntermediateCA

# TODO update the JSON string below
json = "{}"
# create an instance of IntermediateCA from a JSON string
intermediate_ca_instance = IntermediateCA.from_json(json)
# print the JSON string representation of the object
print(IntermediateCA.to_json())

# convert the object into a dict
intermediate_ca_dict = intermediate_ca_instance.to_dict()
# create an instance of IntermediateCA from a dict
intermediate_ca_from_dict = IntermediateCA.from_dict(intermediate_ca_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


