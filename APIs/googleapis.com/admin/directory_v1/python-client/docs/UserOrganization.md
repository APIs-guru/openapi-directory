# UserOrganization

JSON template for an organization entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_center** | **str** | The cost center of the users department. | [optional] 
**custom_type** | **str** | Custom type. | [optional] 
**department** | **str** | Department within the organization. | [optional] 
**description** | **str** | Description of the organization. | [optional] 
**domain** | **str** | The domain to which the organization belongs to. | [optional] 
**full_time_equivalent** | **int** | The full-time equivalent millipercent within the organization (100000 &#x3D; 100%). | [optional] 
**location** | **str** | Location of the organization. This need not be fully qualified address. | [optional] 
**name** | **str** | Name of the organization | [optional] 
**primary** | **bool** | If it user&#39;s primary organization. | [optional] 
**symbol** | **str** | Symbol of the organization. | [optional] 
**title** | **str** | Title (designation) of the user in the organization. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value. | [optional] 

## Example

```python
from openapi_client.models.user_organization import UserOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of UserOrganization from a JSON string
user_organization_instance = UserOrganization.from_json(json)
# print the JSON string representation of the object
print(UserOrganization.to_json())

# convert the object into a dict
user_organization_dict = user_organization_instance.to_dict()
# create an instance of UserOrganization from a dict
user_organization_from_dict = UserOrganization.from_dict(user_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


