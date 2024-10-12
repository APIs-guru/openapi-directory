# ReferenceEntityRecordList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**code** | **str** | Code of the record | 
**created** | **str** | Date of creation. | [optional] 
**updated** | **str** | Date of the last update. | [optional] 
**values** | [**ReferenceEntityRecordListAllOfValues**](ReferenceEntityRecordListAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entity_record_list import ReferenceEntityRecordList

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntityRecordList from a JSON string
reference_entity_record_list_instance = ReferenceEntityRecordList.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntityRecordList.to_json())

# convert the object into a dict
reference_entity_record_list_dict = reference_entity_record_list_instance.to_dict()
# create an instance of ReferenceEntityRecordList from a dict
reference_entity_record_list_from_dict = ReferenceEntityRecordList.from_dict(reference_entity_record_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


