# CriteriaTargeting

Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_criteria_ids** | **List[str]** | A list of numeric IDs to be excluded. | [optional] 
**targeted_criteria_ids** | **List[str]** | A list of numeric IDs to be included. | [optional] 

## Example

```python
from openapi_client.models.criteria_targeting import CriteriaTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of CriteriaTargeting from a JSON string
criteria_targeting_instance = CriteriaTargeting.from_json(json)
# print the JSON string representation of the object
print(CriteriaTargeting.to_json())

# convert the object into a dict
criteria_targeting_dict = criteria_targeting_instance.to_dict()
# create an instance of CriteriaTargeting from a dict
criteria_targeting_from_dict = CriteriaTargeting.from_dict(criteria_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


