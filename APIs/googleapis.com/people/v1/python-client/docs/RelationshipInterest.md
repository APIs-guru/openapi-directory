# RelationshipInterest

**DEPRECATED**: No data will be returned A person's relationship interest .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_value** | **str** | Output only. The value of the relationship interest translated and formatted in the viewer&#39;s account locale or the locale specified in the Accept-Language HTTP header. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The kind of relationship the person is looking for. The value can be custom or one of these predefined values: * &#x60;friend&#x60; * &#x60;date&#x60; * &#x60;relationship&#x60; * &#x60;networking&#x60; | [optional] 

## Example

```python
from openapi_client.models.relationship_interest import RelationshipInterest

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipInterest from a JSON string
relationship_interest_instance = RelationshipInterest.from_json(json)
# print the JSON string representation of the object
print(RelationshipInterest.to_json())

# convert the object into a dict
relationship_interest_dict = relationship_interest_instance.to_dict()
# create an instance of RelationshipInterest from a dict
relationship_interest_from_dict = RelationshipInterest.from_dict(relationship_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


