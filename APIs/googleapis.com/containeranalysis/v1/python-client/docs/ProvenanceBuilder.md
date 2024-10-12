# ProvenanceBuilder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder_dependencies** | [**List[ResourceDescriptor]**](ResourceDescriptor.md) |  | [optional] 
**id** | **str** |  | [optional] 
**version** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.provenance_builder import ProvenanceBuilder

# TODO update the JSON string below
json = "{}"
# create an instance of ProvenanceBuilder from a JSON string
provenance_builder_instance = ProvenanceBuilder.from_json(json)
# print the JSON string representation of the object
print(ProvenanceBuilder.to_json())

# convert the object into a dict
provenance_builder_dict = provenance_builder_instance.to_dict()
# create an instance of ProvenanceBuilder from a dict
provenance_builder_from_dict = ProvenanceBuilder.from_dict(provenance_builder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


