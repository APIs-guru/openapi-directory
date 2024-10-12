# Organization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**links** | [**OrganizationLinks**](OrganizationLinks.md) |  | [optional] 
**name** | **str** |  | 
**status** | **str** | If inactive the organization is inactive. | [optional] [default to 'active']
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.organization import Organization

# TODO update the JSON string below
json = "{}"
# create an instance of Organization from a JSON string
organization_instance = Organization.from_json(json)
# print the JSON string representation of the object
print(Organization.to_json())

# convert the object into a dict
organization_dict = organization_instance.to_dict()
# create an instance of Organization from a dict
organization_from_dict = Organization.from_dict(organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


