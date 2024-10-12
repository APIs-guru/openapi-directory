# OrganizationResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**OrganizationResourceAttributes**](OrganizationResourceAttributes.md) |  | 
**id** | **str** |  | 
**links** | [**OrganizationResourceLinks**](OrganizationResourceLinks.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.organization_resource import OrganizationResource

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationResource from a JSON string
organization_resource_instance = OrganizationResource.from_json(json)
# print the JSON string representation of the object
print(OrganizationResource.to_json())

# convert the object into a dict
organization_resource_dict = organization_resource_instance.to_dict()
# create an instance of OrganizationResource from a dict
organization_resource_from_dict = OrganizationResource.from_dict(organization_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


