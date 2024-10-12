# Basis

Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fingerprint** | [**Fingerprint**](Fingerprint.md) |  | [optional] 
**resource_url** | **str** | Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. | [optional] 

## Example

```python
from openapi_client.models.basis import Basis

# TODO update the JSON string below
json = "{}"
# create an instance of Basis from a JSON string
basis_instance = Basis.from_json(json)
# print the JSON string representation of the object
print(Basis.to_json())

# convert the object into a dict
basis_dict = basis_instance.to_dict()
# create an instance of Basis from a dict
basis_from_dict = Basis.from_dict(basis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


