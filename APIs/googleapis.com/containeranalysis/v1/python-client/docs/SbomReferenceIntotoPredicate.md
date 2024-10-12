# SbomReferenceIntotoPredicate

A predicate which describes the SBOM being referenced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **Dict[str, str]** | A map of algorithm to digest of the contents of the SBOM. | [optional] 
**location** | **str** | The location of the SBOM. | [optional] 
**mime_type** | **str** | The mime type of the SBOM. | [optional] 
**referrer_id** | **str** | The person or system referring this predicate to the consumer. | [optional] 

## Example

```python
from openapi_client.models.sbom_reference_intoto_predicate import SbomReferenceIntotoPredicate

# TODO update the JSON string below
json = "{}"
# create an instance of SbomReferenceIntotoPredicate from a JSON string
sbom_reference_intoto_predicate_instance = SbomReferenceIntotoPredicate.from_json(json)
# print the JSON string representation of the object
print(SbomReferenceIntotoPredicate.to_json())

# convert the object into a dict
sbom_reference_intoto_predicate_dict = sbom_reference_intoto_predicate_instance.to_dict()
# create an instance of SbomReferenceIntotoPredicate from a dict
sbom_reference_intoto_predicate_from_dict = SbomReferenceIntotoPredicate.from_dict(sbom_reference_intoto_predicate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


