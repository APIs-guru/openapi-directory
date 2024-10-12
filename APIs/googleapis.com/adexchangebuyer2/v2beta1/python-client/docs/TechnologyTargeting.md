# TechnologyTargeting

Represents targeting about various types of technology.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_capability_targeting** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 
**device_category_targeting** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 
**operating_system_targeting** | [**OperatingSystemTargeting**](OperatingSystemTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.technology_targeting import TechnologyTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of TechnologyTargeting from a JSON string
technology_targeting_instance = TechnologyTargeting.from_json(json)
# print the JSON string representation of the object
print(TechnologyTargeting.to_json())

# convert the object into a dict
technology_targeting_dict = technology_targeting_instance.to_dict()
# create an instance of TechnologyTargeting from a dict
technology_targeting_from_dict = TechnologyTargeting.from_dict(technology_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


