# PatchReferenceEntityRecordsRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code of the record | 
**created** | **str** | Date of creation. | [optional] 
**updated** | **str** | Date of the last update. | [optional] 
**values** | [**ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValues**](ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_reference_entity_records_request_inner import PatchReferenceEntityRecordsRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReferenceEntityRecordsRequestInner from a JSON string
patch_reference_entity_records_request_inner_instance = PatchReferenceEntityRecordsRequestInner.from_json(json)
# print the JSON string representation of the object
print(PatchReferenceEntityRecordsRequestInner.to_json())

# convert the object into a dict
patch_reference_entity_records_request_inner_dict = patch_reference_entity_records_request_inner_instance.to_dict()
# create an instance of PatchReferenceEntityRecordsRequestInner from a dict
patch_reference_entity_records_request_inner_from_dict = PatchReferenceEntityRecordsRequestInner.from_dict(patch_reference_entity_records_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


