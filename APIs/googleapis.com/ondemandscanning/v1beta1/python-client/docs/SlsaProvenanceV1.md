# SlsaProvenanceV1

Keep in sync with schema at https://github.com/slsa-framework/slsa/blob/main/docs/provenance/schema/v1/provenance.proto Builder renamed to ProvenanceBuilder because of Java conflicts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_definition** | [**BuildDefinition**](BuildDefinition.md) |  | [optional] 
**run_details** | [**RunDetails**](RunDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.slsa_provenance_v1 import SlsaProvenanceV1

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaProvenanceV1 from a JSON string
slsa_provenance_v1_instance = SlsaProvenanceV1.from_json(json)
# print the JSON string representation of the object
print(SlsaProvenanceV1.to_json())

# convert the object into a dict
slsa_provenance_v1_dict = slsa_provenance_v1_instance.to_dict()
# create an instance of SlsaProvenanceV1 from a dict
slsa_provenance_v1_from_dict = SlsaProvenanceV1.from_dict(slsa_provenance_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


