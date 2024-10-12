# OrganizationSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OrganizationSourceData**](OrganizationSourceData.md) |  | [optional] 
**links** | [**OrganizationSourceLinks**](OrganizationSourceLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.organization_source import OrganizationSource

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationSource from a JSON string
organization_source_instance = OrganizationSource.from_json(json)
# print the JSON string representation of the object
print(OrganizationSource.to_json())

# convert the object into a dict
organization_source_dict = organization_source_instance.to_dict()
# create an instance of OrganizationSource from a dict
organization_source_from_dict = OrganizationSource.from_dict(organization_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


