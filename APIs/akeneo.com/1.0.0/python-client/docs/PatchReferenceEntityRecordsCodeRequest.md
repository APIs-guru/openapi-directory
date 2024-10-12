# PatchReferenceEntityRecordsCodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code of the record | 
**created** | **str** | Date of creation. | [optional] 
**updated** | **str** | Date of the last update. | [optional] 
**values** | [**ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValues**](ReferenceEntityRecordAllOfEmbeddedItemsInnerAllOfValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_reference_entity_records_code_request import PatchReferenceEntityRecordsCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReferenceEntityRecordsCodeRequest from a JSON string
patch_reference_entity_records_code_request_instance = PatchReferenceEntityRecordsCodeRequest.from_json(json)
# print the JSON string representation of the object
print(PatchReferenceEntityRecordsCodeRequest.to_json())

# convert the object into a dict
patch_reference_entity_records_code_request_dict = patch_reference_entity_records_code_request_instance.to_dict()
# create an instance of PatchReferenceEntityRecordsCodeRequest from a dict
patch_reference_entity_records_code_request_from_dict = PatchReferenceEntityRecordsCodeRequest.from_dict(patch_reference_entity_records_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


