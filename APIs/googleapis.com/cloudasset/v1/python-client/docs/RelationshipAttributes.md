# RelationshipAttributes

DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The detail of the relationship, e.g. &#x60;contains&#x60;, &#x60;attaches&#x60; | [optional] 
**source_resource_type** | **str** | The source asset type. Example: &#x60;compute.googleapis.com/Instance&#x60; | [optional] 
**target_resource_type** | **str** | The target asset type. Example: &#x60;compute.googleapis.com/Disk&#x60; | [optional] 
**type** | **str** | The unique identifier of the relationship type. Example: &#x60;INSTANCE_TO_INSTANCEGROUP&#x60; | [optional] 

## Example

```python
from openapi_client.models.relationship_attributes import RelationshipAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipAttributes from a JSON string
relationship_attributes_instance = RelationshipAttributes.from_json(json)
# print the JSON string representation of the object
print(RelationshipAttributes.to_json())

# convert the object into a dict
relationship_attributes_dict = relationship_attributes_instance.to_dict()
# create an instance of RelationshipAttributes from a dict
relationship_attributes_from_dict = RelationshipAttributes.from_dict(relationship_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


