# OrgUnitInfo

The organizational unit to search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_unit_id** | **str** | The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/). | [optional] 

## Example

```python
from openapi_client.models.org_unit_info import OrgUnitInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrgUnitInfo from a JSON string
org_unit_info_instance = OrgUnitInfo.from_json(json)
# print the JSON string representation of the object
print(OrgUnitInfo.to_json())

# convert the object into a dict
org_unit_info_dict = org_unit_info_instance.to_dict()
# create an instance of OrgUnitInfo from a dict
org_unit_info_from_dict = OrgUnitInfo.from_dict(org_unit_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


