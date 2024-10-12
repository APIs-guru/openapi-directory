# SlsaProvenance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder** | [**SlsaBuilder**](SlsaBuilder.md) |  | [optional] 
**materials** | [**List[Material]**](Material.md) | The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. | [optional] 
**metadata** | [**SlsaMetadata**](SlsaMetadata.md) |  | [optional] 
**recipe** | [**SlsaRecipe**](SlsaRecipe.md) |  | [optional] 

## Example

```python
from openapi_client.models.slsa_provenance import SlsaProvenance

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaProvenance from a JSON string
slsa_provenance_instance = SlsaProvenance.from_json(json)
# print the JSON string representation of the object
print(SlsaProvenance.to_json())

# convert the object into a dict
slsa_provenance_dict = slsa_provenance_instance.to_dict()
# create an instance of SlsaProvenance from a dict
slsa_provenance_from_dict = SlsaProvenance.from_dict(slsa_provenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


