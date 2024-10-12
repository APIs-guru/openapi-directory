# ReferenceEntityRecordAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Code of the record | 
**created** | **str** | Date of creation. | [optional] 
**updated** | **str** | Date of the last update. | [optional] 
**values** | [**ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValues**](ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entity_record_all_of_embedded_items_inner import ReferenceEntityRecordAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntityRecordAllOfEmbeddedItemsInner from a JSON string
reference_entity_record_all_of_embedded_items_inner_instance = ReferenceEntityRecordAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntityRecordAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
reference_entity_record_all_of_embedded_items_inner_dict = reference_entity_record_all_of_embedded_items_inner_instance.to_dict()
# create an instance of ReferenceEntityRecordAllOfEmbeddedItemsInner from a dict
reference_entity_record_all_of_embedded_items_inner_from_dict = ReferenceEntityRecordAllOfEmbeddedItemsInner.from_dict(reference_entity_record_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


