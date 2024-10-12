# OperatingSystemTargeting

Represents targeting information for operating systems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operating_system_criteria** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 
**operating_system_version_criteria** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.operating_system_targeting import OperatingSystemTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemTargeting from a JSON string
operating_system_targeting_instance = OperatingSystemTargeting.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemTargeting.to_json())

# convert the object into a dict
operating_system_targeting_dict = operating_system_targeting_instance.to_dict()
# create an instance of OperatingSystemTargeting from a dict
operating_system_targeting_from_dict = OperatingSystemTargeting.from_dict(operating_system_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


