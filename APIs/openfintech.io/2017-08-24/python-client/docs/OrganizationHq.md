# OrganizationHq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OrganizationHqData**](OrganizationHqData.md) |  | [optional] 
**links** | [**OrganizationHqLinks**](OrganizationHqLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.organization_hq import OrganizationHq

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationHq from a JSON string
organization_hq_instance = OrganizationHq.from_json(json)
# print the JSON string representation of the object
print(OrganizationHq.to_json())

# convert the object into a dict
organization_hq_dict = organization_hq_instance.to_dict()
# create an instance of OrganizationHq from a dict
organization_hq_from_dict = OrganizationHq.from_dict(organization_hq_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


