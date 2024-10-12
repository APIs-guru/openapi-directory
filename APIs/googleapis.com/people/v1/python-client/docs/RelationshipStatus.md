# RelationshipStatus

**DEPRECATED**: No data will be returned A person's relationship status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_value** | **str** | Output only. The value of the relationship status translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The relationship status. The value can be custom or one of these predefined values: * &#x60;single&#x60; * &#x60;inARelationship&#x60; * &#x60;engaged&#x60; * &#x60;married&#x60; * &#x60;itsComplicated&#x60; * &#x60;openRelationship&#x60; * &#x60;widowed&#x60; * &#x60;inDomesticPartnership&#x60; * &#x60;inCivilUnion&#x60; | [optional] 

## Example

```python
from openapi_client.models.relationship_status import RelationshipStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipStatus from a JSON string
relationship_status_instance = RelationshipStatus.from_json(json)
# print the JSON string representation of the object
print(RelationshipStatus.to_json())

# convert the object into a dict
relationship_status_dict = relationship_status_instance.to_dict()
# create an instance of RelationshipStatus from a dict
relationship_status_from_dict = RelationshipStatus.from_dict(relationship_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


