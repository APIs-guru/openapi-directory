# SlsaMetadata

Other properties of the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_finished_on** | **str** | The timestamp of when the build completed. | [optional] 
**build_invocation_id** | **str** | Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. | [optional] 
**build_started_on** | **str** | The timestamp of when the build started. | [optional] 
**completeness** | [**SlsaCompleteness**](SlsaCompleteness.md) |  | [optional] 
**reproducible** | **bool** | If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. | [optional] 

## Example

```python
from openapi_client.models.slsa_metadata import SlsaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaMetadata from a JSON string
slsa_metadata_instance = SlsaMetadata.from_json(json)
# print the JSON string representation of the object
print(SlsaMetadata.to_json())

# convert the object into a dict
slsa_metadata_dict = slsa_metadata_instance.to_dict()
# create an instance of SlsaMetadata from a dict
slsa_metadata_from_dict = SlsaMetadata.from_dict(slsa_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


