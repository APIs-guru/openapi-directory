# ReferenceEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**GetReferenceEntitiesCode200ResponseAllOfLinks**](GetReferenceEntitiesCode200ResponseAllOfLinks.md) |  | [optional] 
**code** | **str** | Reference entity code | 
**image** | **str** | Code of the reference entity image | [optional] 
**labels** | [**ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels**](ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entity import ReferenceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntity from a JSON string
reference_entity_instance = ReferenceEntity.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntity.to_json())

# convert the object into a dict
reference_entity_dict = reference_entity_instance.to_dict()
# create an instance of ReferenceEntity from a dict
reference_entity_from_dict = ReferenceEntity.from_dict(reference_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


