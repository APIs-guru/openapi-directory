# SBOMReferenceNote

The note representing an SBOM reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format that SBOM takes. E.g. may be spdx, cyclonedx, etc... | [optional] 
**version** | **str** | The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3. | [optional] 

## Example

```python
from openapi_client.models.sbom_reference_note import SBOMReferenceNote

# TODO update the JSON string below
json = "{}"
# create an instance of SBOMReferenceNote from a JSON string
sbom_reference_note_instance = SBOMReferenceNote.from_json(json)
# print the JSON string representation of the object
print(SBOMReferenceNote.to_json())

# convert the object into a dict
sbom_reference_note_dict = sbom_reference_note_instance.to_dict()
# create an instance of SBOMReferenceNote from a dict
sbom_reference_note_from_dict = SBOMReferenceNote.from_dict(sbom_reference_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


