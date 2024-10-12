# OrganizationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_in_countries** | [**OrganizationActive**](OrganizationActive.md) |  | [optional] 
**hq_in_country** | [**OrganizationHq**](OrganizationHq.md) |  | [optional] 
**source_register_org** | [**OrganizationSource**](OrganizationSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.organization_relationships import OrganizationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationRelationships from a JSON string
organization_relationships_instance = OrganizationRelationships.from_json(json)
# print the JSON string representation of the object
print(OrganizationRelationships.to_json())

# convert the object into a dict
organization_relationships_dict = organization_relationships_instance.to_dict()
# create an instance of OrganizationRelationships from a dict
organization_relationships_from_dict = OrganizationRelationships.from_dict(organization_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


