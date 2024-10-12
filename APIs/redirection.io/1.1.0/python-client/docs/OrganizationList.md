# OrganizationList



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**slug** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.organization_list import OrganizationList

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationList from a JSON string
organization_list_instance = OrganizationList.from_json(json)
# print the JSON string representation of the object
print(OrganizationList.to_json())

# convert the object into a dict
organization_list_dict = organization_list_instance.to_dict()
# create an instance of OrganizationList from a dict
organization_list_from_dict = OrganizationList.from_dict(organization_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


