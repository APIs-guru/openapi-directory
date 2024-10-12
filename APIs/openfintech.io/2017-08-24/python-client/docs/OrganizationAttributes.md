# OrganizationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**OrganizationAddress**](OrganizationAddress.md) |  | [optional] 
**blog** | **str** | Organization&#x60;s blog | [optional] 
**code** | **str** | Organization&#x60;s code | [optional] 
**contacts** | [**OrganizationContacts**](OrganizationContacts.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**icon** | [**OrganizationAttributesIcon**](OrganizationAttributesIcon.md) |  | [optional] 
**industries** | **List[str]** | Industries | [optional] 
**logo** | [**OrganizationAttributesLogo**](OrganizationAttributesLogo.md) |  | [optional] 
**name** | **str** | Organization&#x60;s name | [optional] 
**site** | **str** | Organization&#x60;s site | [optional] 
**social_profiles** | [**OrganizationSocial**](OrganizationSocial.md) |  | [optional] 
**status** | **str** | Organization&#x60;s status [active, liquidated, deleted] | [optional] 
**wiki** | **str** | Organization&#x60;s wiki | [optional] 

## Example

```python
from openapi_client.models.organization_attributes import OrganizationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationAttributes from a JSON string
organization_attributes_instance = OrganizationAttributes.from_json(json)
# print the JSON string representation of the object
print(OrganizationAttributes.to_json())

# convert the object into a dict
organization_attributes_dict = organization_attributes_instance.to_dict()
# create an instance of OrganizationAttributes from a dict
organization_attributes_from_dict = OrganizationAttributes.from_dict(organization_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


