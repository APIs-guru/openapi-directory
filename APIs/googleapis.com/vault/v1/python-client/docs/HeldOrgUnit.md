# HeldOrgUnit

The organizational unit covered by a hold. This structure is immutable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hold_time** | **str** | When the organizational unit was put on hold. This property is immutable. | [optional] 
**org_unit_id** | **str** | The organizational unit&#39;s immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). | [optional] 

## Example

```python
from openapi_client.models.held_org_unit import HeldOrgUnit

# TODO update the JSON string below
json = "{}"
# create an instance of HeldOrgUnit from a JSON string
held_org_unit_instance = HeldOrgUnit.from_json(json)
# print the JSON string representation of the object
print(HeldOrgUnit.to_json())

# convert the object into a dict
held_org_unit_dict = held_org_unit_instance.to_dict()
# create an instance of HeldOrgUnit from a dict
held_org_unit_from_dict = HeldOrgUnit.from_dict(held_org_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


