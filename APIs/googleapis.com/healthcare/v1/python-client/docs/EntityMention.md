# EntityMention

An entity mention in the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certainty_assessment** | [**Feature**](Feature.md) |  | [optional] 
**confidence** | **float** | The model&#39;s confidence in this entity mention annotation. A number between 0 and 1. | [optional] 
**linked_entities** | [**List[LinkedEntity]**](LinkedEntity.md) | linked_entities are candidate ontological concepts that this entity mention may refer to. They are sorted by decreasing confidence. | [optional] 
**mention_id** | **str** | mention_id uniquely identifies each entity mention in a single response. | [optional] 
**subject** | [**Feature**](Feature.md) |  | [optional] 
**temporal_assessment** | [**Feature**](Feature.md) |  | [optional] 
**text** | [**TextSpan**](TextSpan.md) |  | [optional] 
**type** | **str** | The semantic type of the entity: UNKNOWN_ENTITY_TYPE, ALONE, ANATOMICAL_STRUCTURE, ASSISTED_LIVING, BF_RESULT, BM_RESULT, BM_UNIT, BM_VALUE, BODY_FUNCTION, BODY_MEASUREMENT, COMPLIANT, DOESNOT_FOLLOWUP, FAMILY, FOLLOWSUP, LABORATORY_DATA, LAB_RESULT, LAB_UNIT, LAB_VALUE, MEDICAL_DEVICE, MEDICINE, MED_DOSE, MED_DURATION, MED_FORM, MED_FREQUENCY, MED_ROUTE, MED_STATUS, MED_STRENGTH, MED_TOTALDOSE, MED_UNIT, NON_COMPLIANT, OTHER_LIVINGSTATUS, PROBLEM, PROCEDURE, PROCEDURE_RESULT, PROC_METHOD, REASON_FOR_NONCOMPLIANCE, SEVERITY, SUBSTANCE_ABUSE, UNCLEAR_FOLLOWUP. | [optional] 

## Example

```python
from openapi_client.models.entity_mention import EntityMention

# TODO update the JSON string below
json = "{}"
# create an instance of EntityMention from a JSON string
entity_mention_instance = EntityMention.from_json(json)
# print the JSON string representation of the object
print(EntityMention.to_json())

# convert the object into a dict
entity_mention_dict = entity_mention_instance.to_dict()
# create an instance of EntityMention from a dict
entity_mention_from_dict = EntityMention.from_dict(entity_mention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


