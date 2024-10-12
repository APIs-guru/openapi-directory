# ReferenceEntitiesAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks**](ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Reference entity code | 
**image** | **str** | Code of the reference entity image | [optional] 
**labels** | [**ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels**](ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entities_all_of_embedded_items_inner import ReferenceEntitiesAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntitiesAllOfEmbeddedItemsInner from a JSON string
reference_entities_all_of_embedded_items_inner_instance = ReferenceEntitiesAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntitiesAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
reference_entities_all_of_embedded_items_inner_dict = reference_entities_all_of_embedded_items_inner_instance.to_dict()
# create an instance of ReferenceEntitiesAllOfEmbeddedItemsInner from a dict
reference_entities_all_of_embedded_items_inner_from_dict = ReferenceEntitiesAllOfEmbeddedItemsInner.from_dict(reference_entities_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


