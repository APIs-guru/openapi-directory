# OrganisationCheckResultObject

The results of KYC/AML check on a organisation with a prior ownership query. This will be retrived via GET /retrieve/response/{requestId} after you receive a notification that the results are ready. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_categories** | **Dict[str, List[str]]** | A map of the entity categories that were selected for checks and an array of the entity IDs for each. The results for each entity ID will be in either the entityCheckResults or entityCheckErrors maps. Entities may appear in more than one category.  | [optional] 
**entity_check_errors** | [**Dict[str, ErrorObject]**](ErrorObject.md) | A map of outright errors (failure to generate any kind of result). These objects will be referenced by entity ID in the entity category map.  | [optional] 
**entity_check_results** | [**Dict[str, CheckEntityCheckResultObject]**](CheckEntityCheckResultObject.md) | List of all entities check results (both individuals and organisations) other than outright errors. These objects will be referenced by entity ID in the entity category map.  | [optional] 
**entity_id** | **str** | The entityId of the organisation for which this result was created.  | [optional] 
**group_id** | **str** | The unique ID for grouping all new KYC/AML checks in this result. This is only for Frankie internal use.  | [optional] 

## Example

```python
from openapi_client.models.organisation_check_result_object import OrganisationCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationCheckResultObject from a JSON string
organisation_check_result_object_instance = OrganisationCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(OrganisationCheckResultObject.to_json())

# convert the object into a dict
organisation_check_result_object_dict = organisation_check_result_object_instance.to_dict()
# create an instance of OrganisationCheckResultObject from a dict
organisation_check_result_object_from_dict = OrganisationCheckResultObject.from_dict(organisation_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


