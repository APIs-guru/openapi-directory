# OrganizationSourceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organization_source_data import OrganizationSourceData

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationSourceData from a JSON string
organization_source_data_instance = OrganizationSourceData.from_json(json)
# print the JSON string representation of the object
print(OrganizationSourceData.to_json())

# convert the object into a dict
organization_source_data_dict = organization_source_data_instance.to_dict()
# create an instance of OrganizationSourceData from a dict
organization_source_data_from_dict = OrganizationSourceData.from_dict(organization_source_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


