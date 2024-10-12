# AddOrganizationUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller** | **str** | The id of the user that initiated this operation | [optional] 
**client_number** | **str** | A client number. Sometimes used when communicating with external system. Must be unique if specified. | [optional] 
**country** | **str** | The country code that best matches the organization unit. If unspecified the platform default will be set. | [optional] 
**display_name** | **str** | The name shown for the organization unit | 
**external_id** | **str** | The external id (foreign key). Must not exceed 255 characters. | [optional] 
**parent** | **float** | A Organization Unit id of the parent Organization Unit (optional). | [optional] 

## Example

```python
from openapi_client.models.add_organization_unit import AddOrganizationUnit

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrganizationUnit from a JSON string
add_organization_unit_instance = AddOrganizationUnit.from_json(json)
# print the JSON string representation of the object
print(AddOrganizationUnit.to_json())

# convert the object into a dict
add_organization_unit_dict = add_organization_unit_instance.to_dict()
# create an instance of AddOrganizationUnit from a dict
add_organization_unit_from_dict = AddOrganizationUnit.from_dict(add_organization_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


