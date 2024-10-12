# RelationshipOccurrence

RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | A place for the SPDX file creator to record any general comments about the relationship | [optional] 
**source** | **str** | Also referred to as SPDXRef-A The source SPDX element (file, package, etc) | [optional] 
**target** | **str** | Also referred to as SPDXRef-B The target SPDC element (file, package, etc) In cases where there are \&quot;known unknowns\&quot;, the use of the keyword NOASSERTION can be used The keywords NONE can be used to indicate that an SPDX element (package/file/snippet) has no other elements connected by some relationship to it | [optional] 
**type** | **str** | Output only. The type of relationship between the source and target SPDX elements | [optional] [readonly] 

## Example

```python
from openapi_client.models.relationship_occurrence import RelationshipOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipOccurrence from a JSON string
relationship_occurrence_instance = RelationshipOccurrence.from_json(json)
# print the JSON string representation of the object
print(RelationshipOccurrence.to_json())

# convert the object into a dict
relationship_occurrence_dict = relationship_occurrence_instance.to_dict()
# create an instance of RelationshipOccurrence from a dict
relationship_occurrence_from_dict = RelationshipOccurrence.from_dict(relationship_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


