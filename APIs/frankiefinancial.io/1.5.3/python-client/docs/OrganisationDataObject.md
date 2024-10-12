# OrganisationDataObject

Organisation details for entities. Returned from an ASIC report. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adverse_credit_data_present** | **bool** |  | [optional] 
**var_class** | [**CodeDescription**](CodeDescription.md) |  | [optional] 
**disclosing_entity_indicator** | **bool** |  | [optional] 
**includes_non_beneficially_held** | **bool** |  | [optional] 
**kyc_customer_type** | **str** |  | [optional] 
**last_check_date** | **date** |  | [optional] 
**ownership_resolved** | **bool** |  | [optional] 
**registered_name** | **str** |  | [optional] 
**registration** | [**OrganisationDataObjectRegistration**](OrganisationDataObjectRegistration.md) |  | [optional] 
**share_structure** | [**List[ShareStructureObject]**](ShareStructureObject.md) |  | [optional] 
**start_date** | **date** |  | [optional] 
**status** | [**CodeDescription**](CodeDescription.md) |  | [optional] 
**subclass** | [**CodeDescription**](CodeDescription.md) |  | [optional] 
**type** | [**CodeDescription**](CodeDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.organisation_data_object import OrganisationDataObject

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationDataObject from a JSON string
organisation_data_object_instance = OrganisationDataObject.from_json(json)
# print the JSON string representation of the object
print(OrganisationDataObject.to_json())

# convert the object into a dict
organisation_data_object_dict = organisation_data_object_instance.to_dict()
# create an instance of OrganisationDataObject from a dict
organisation_data_object_from_dict = OrganisationDataObject.from_dict(organisation_data_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


