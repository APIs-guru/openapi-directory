# OrganizationActive


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** |  | [optional] 
**links** | [**OrganizationActiveLinks**](OrganizationActiveLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.organization_active import OrganizationActive

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationActive from a JSON string
organization_active_instance = OrganizationActive.from_json(json)
# print the JSON string representation of the object
print(OrganizationActive.to_json())

# convert the object into a dict
organization_active_dict = organization_active_instance.to_dict()
# create an instance of OrganizationActive from a dict
organization_active_from_dict = OrganizationActive.from_dict(organization_active_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


