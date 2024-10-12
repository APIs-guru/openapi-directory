# Relation

A person's relation to another person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_type** | **str** | Output only. The type of the relation translated and formatted in the viewer&#39;s account locale or the locale specified in the Accept-Language HTTP header. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**person** | **str** | The name of the other person this relation refers to. | [optional] 
**type** | **str** | The person&#39;s relation to the other person. The type can be custom or one of these predefined values: * &#x60;spouse&#x60; * &#x60;child&#x60; * &#x60;mother&#x60; * &#x60;father&#x60; * &#x60;parent&#x60; * &#x60;brother&#x60; * &#x60;sister&#x60; * &#x60;friend&#x60; * &#x60;relative&#x60; * &#x60;domesticPartner&#x60; * &#x60;manager&#x60; * &#x60;assistant&#x60; * &#x60;referredBy&#x60; * &#x60;partner&#x60; | [optional] 

## Example

```python
from openapi_client.models.relation import Relation

# TODO update the JSON string below
json = "{}"
# create an instance of Relation from a JSON string
relation_instance = Relation.from_json(json)
# print the JSON string representation of the object
print(Relation.to_json())

# convert the object into a dict
relation_dict = relation_instance.to_dict()
# create an instance of Relation from a dict
relation_from_dict = Relation.from_dict(relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


