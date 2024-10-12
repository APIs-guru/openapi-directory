# CheckEntityCheckResultObjectEntityResult

This will hold all of the check results that were performed against the 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses_check** | [**List[AddressCheckResultObject]**](AddressCheckResultObject.md) | Collection of address objects. | [optional] 
**adverse_media_check** | [**List[BackgroundCheckResultObject]**](BackgroundCheckResultObject.md) | !!!!! DEPRECATED !!!!! Please use the multi-result AMLResultSets structure instead.  Note: This single check result structure will be retired in v1.3 !!!!! DEPRECATED !!!!!  Collection of check results for the entity being found in any adverse media  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**aml_result_sets** | [**List[AMLResultSet]**](AMLResultSet.md) | An array of Collections of PEP/Sanctions/WL/Media objects, as AML providers can return multiple results  | [optional] 
**date_of_birth_check** | [**DOBCheckResultObject**](DOBCheckResultObject.md) |  | [optional] 
**entity_id** | **str** | Unique ID for the entity.  | [optional] 
**gender_check** | [**GenderCheckResultObject**](GenderCheckResultObject.md) |  | [optional] 
**identity_docs_check** | [**List[IdentityDocumentCheckResultObject]**](IdentityDocumentCheckResultObject.md) | Collection of identity documents (photos, scans, selfies, etc), and their check results | [optional] 
**name_check** | [**PersonalNameCheckResultObject**](PersonalNameCheckResultObject.md) |  | [optional] 
**pep_check** | [**List[BackgroundCheckResultObject]**](BackgroundCheckResultObject.md) | !!!!! DEPRECATED !!!!! Please use the multi-result AMLResultSets structure instead.  Note: This single check result structure will be retired in v1.3 !!!!! DEPRECATED !!!!!  Collection of check results for the entity being a Politically Exposed Person  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**sanctions_check** | [**List[BackgroundCheckResultObject]**](BackgroundCheckResultObject.md) | !!!!! DEPRECATED !!!!! Please use the multi-result AMLResultSets structure instead.  Note: This single check result structure will be retired in v1.3 !!!!! DEPRECATED !!!!!  Collection of check results for the entity being on a sanctions list  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 
**watchlist_check** | [**List[BackgroundCheckResultObject]**](BackgroundCheckResultObject.md) | !!!!! DEPRECATED !!!!! Please use the multi-result AMLResultSets structure instead.  Note: This single check result structure will be retired in v1.3 !!!!! DEPRECATED !!!!!  Collection of check results for the entity being on a watchlist  An array sorted by type, then reverse chronological order of some/all background checks done on this entity. Older checks may have been previously done by you or another institution, and if so, these will be listed and appropriately anonymised/obfuscated.  | [optional] 

## Example

```python
from openapi_client.models.check_entity_check_result_object_entity_result import CheckEntityCheckResultObjectEntityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEntityCheckResultObjectEntityResult from a JSON string
check_entity_check_result_object_entity_result_instance = CheckEntityCheckResultObjectEntityResult.from_json(json)
# print the JSON string representation of the object
print(CheckEntityCheckResultObjectEntityResult.to_json())

# convert the object into a dict
check_entity_check_result_object_entity_result_dict = check_entity_check_result_object_entity_result_instance.to_dict()
# create an instance of CheckEntityCheckResultObjectEntityResult from a dict
check_entity_check_result_object_entity_result_from_dict = CheckEntityCheckResultObjectEntityResult.from_dict(check_entity_check_result_object_entity_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


