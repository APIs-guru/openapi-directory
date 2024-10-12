# PatchReferenceEntityCodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Reference entity code | 
**image** | **str** | Code of the reference entity image | [optional] 
**labels** | [**ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels**](ReferenceEntitiesAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 

## Example

```python
from openapi_client.models.patch_reference_entity_code_request import PatchReferenceEntityCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReferenceEntityCodeRequest from a JSON string
patch_reference_entity_code_request_instance = PatchReferenceEntityCodeRequest.from_json(json)
# print the JSON string representation of the object
print(PatchReferenceEntityCodeRequest.to_json())

# convert the object into a dict
patch_reference_entity_code_request_dict = patch_reference_entity_code_request_instance.to_dict()
# create an instance of PatchReferenceEntityCodeRequest from a dict
patch_reference_entity_code_request_from_dict = PatchReferenceEntityCodeRequest.from_dict(patch_reference_entity_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


