# OrganizationSocial

Social profiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facebook** | **str** |  | [optional] 
**google_plus** | **str** |  | [optional] 
**linked_in** | **str** |  | [optional] 
**twitter** | **str** |  | [optional] 
**vkontakte** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organization_social import OrganizationSocial

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationSocial from a JSON string
organization_social_instance = OrganizationSocial.from_json(json)
# print the JSON string representation of the object
print(OrganizationSocial.to_json())

# convert the object into a dict
organization_social_dict = organization_social_instance.to_dict()
# create an instance of OrganizationSocial from a dict
organization_social_from_dict = OrganizationSocial.from_dict(organization_social_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


