# Criteria

Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | **List[str]** | The specific AlertPolicy names for the alert that should be snoozed. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID] There is a limit of 16 policies per snooze. This limit is checked during snooze creation. | [optional] 

## Example

```python
from openapi_client.models.criteria import Criteria

# TODO update the JSON string below
json = "{}"
# create an instance of Criteria from a JSON string
criteria_instance = Criteria.from_json(json)
# print the JSON string representation of the object
print(Criteria.to_json())

# convert the object into a dict
criteria_dict = criteria_instance.to_dict()
# create an instance of Criteria from a dict
criteria_from_dict = Criteria.from_dict(criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


