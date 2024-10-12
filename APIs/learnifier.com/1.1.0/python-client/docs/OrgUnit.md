# OrgUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_id** | **str** | The external id (foreign key). Must not exceed 255 characters. | [optional] 
**id** | **int** | Unique identifier representing a specific organization unit. Id numbers are never reused. | 
**name** | **str** | The name of the client. | [optional] 
**parent_id** | **int** | Unique identifier of the parent or *null* if there is no parent. | [optional] 
**type** | **str** | The organization unit type. The only type is *client* at the moment. | 

## Example

```python
from openapi_client.models.org_unit import OrgUnit

# TODO update the JSON string below
json = "{}"
# create an instance of OrgUnit from a JSON string
org_unit_instance = OrgUnit.from_json(json)
# print the JSON string representation of the object
print(OrgUnit.to_json())

# convert the object into a dict
org_unit_dict = org_unit_instance.to_dict()
# create an instance of OrgUnit from a dict
org_unit_from_dict = OrgUnit.from_dict(org_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


