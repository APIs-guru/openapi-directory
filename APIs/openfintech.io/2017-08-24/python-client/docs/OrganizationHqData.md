# OrganizationHqData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | HQ location | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organization_hq_data import OrganizationHqData

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationHqData from a JSON string
organization_hq_data_instance = OrganizationHqData.from_json(json)
# print the JSON string representation of the object
print(OrganizationHqData.to_json())

# convert the object into a dict
organization_hq_data_dict = organization_hq_data_instance.to_dict()
# create an instance of OrganizationHqData from a dict
organization_hq_data_from_dict = OrganizationHqData.from_dict(organization_hq_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


