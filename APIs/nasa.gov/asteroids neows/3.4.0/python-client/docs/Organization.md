# Organization

A NASA center/facility associated with an project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acronym** | **str** | The acronym of the organization. | [optional] 
**city** | **str** | The city in which the organization is located. | [optional] 
**name** | **str** | The name of the organization. | [optional] 
**state** | **str** | The state in which the organization is located. | [optional] 

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


