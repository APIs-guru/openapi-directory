# FamilyInfoMembership

Family membership info of the user that made the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquire_permission** | **str** | Restrictions on user buying and acquiring content. | [optional] 
**age_group** | **str** | The age group of the user. | [optional] 
**allowed_maturity_rating** | **str** | The maximum allowed maturity rating for the user. | [optional] 
**is_in_family** | **bool** |  | [optional] 
**role** | **str** | The role of the user in the family. | [optional] 

## Example

```python
from openapi_client.models.family_info_membership import FamilyInfoMembership

# TODO update the JSON string below
json = "{}"
# create an instance of FamilyInfoMembership from a JSON string
family_info_membership_instance = FamilyInfoMembership.from_json(json)
# print the JSON string representation of the object
print(FamilyInfoMembership.to_json())

# convert the object into a dict
family_info_membership_dict = family_info_membership_instance.to_dict()
# create an instance of FamilyInfoMembership from a dict
family_info_membership_from_dict = FamilyInfoMembership.from_dict(family_info_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


