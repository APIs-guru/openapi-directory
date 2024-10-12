# InTotoProvenance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder_config** | [**BuilderConfig**](BuilderConfig.md) |  | [optional] 
**materials** | **List[str]** | The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 
**recipe** | [**Recipe**](Recipe.md) |  | [optional] 

## Example

```python
from openapi_client.models.in_toto_provenance import InTotoProvenance

# TODO update the JSON string below
json = "{}"
# create an instance of InTotoProvenance from a JSON string
in_toto_provenance_instance = InTotoProvenance.from_json(json)
# print the JSON string representation of the object
print(InTotoProvenance.to_json())

# convert the object into a dict
in_toto_provenance_dict = in_toto_provenance_instance.to_dict()
# create an instance of InTotoProvenance from a dict
in_toto_provenance_from_dict = InTotoProvenance.from_dict(in_toto_provenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


