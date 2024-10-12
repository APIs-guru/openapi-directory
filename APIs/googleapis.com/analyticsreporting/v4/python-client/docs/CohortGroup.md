# CohortGroup

Defines a cohort group. For example: \"cohortGroup\": { \"cohorts\": [{ \"name\": \"cohort 1\", \"type\": \"FIRST_VISIT_DATE\", \"dateRange\": { \"startDate\": \"2015-08-01\", \"endDate\": \"2015-08-01\" } },{ \"name\": \"cohort 2\" \"type\": \"FIRST_VISIT_DATE\" \"dateRange\": { \"startDate\": \"2015-07-01\", \"endDate\": \"2015-07-01\" } }] }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cohorts** | [**List[Cohort]**](Cohort.md) | The definition for the cohort. | [optional] 
**lifetime_value** | **bool** | Enable Life Time Value (LTV). LTV measures lifetime value for users acquired through different channels. Please see: [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and [Lifetime Value](https://support.google.com/analytics/answer/6182550) If the value of lifetimeValue is false: - The metric values are similar to the values in the web interface cohort report. - The cohort definition date ranges must be aligned to the calendar week and month. i.e. while requesting &#x60;ga:cohortNthWeek&#x60; the &#x60;startDate&#x60; in the cohort definition should be a Sunday and the &#x60;endDate&#x60; should be the following Saturday, and for &#x60;ga:cohortNthMonth&#x60;, the &#x60;startDate&#x60; should be the 1st of the month and &#x60;endDate&#x60; should be the last day of the month. When the lifetimeValue is true: - The metric values will correspond to the values in the web interface LifeTime value report. - The Lifetime Value report shows you how user value (Revenue) and engagement (Appviews, Goal Completions, Sessions, and Session Duration) grow during the 90 days after a user is acquired. - The metrics are calculated as a cumulative average per user per the time increment. - The cohort definition date ranges need not be aligned to the calendar week and month boundaries. - The &#x60;viewId&#x60; must be an [app view ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews) | [optional] 

## Example

```python
from openapi_client.models.cohort_group import CohortGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CohortGroup from a JSON string
cohort_group_instance = CohortGroup.from_json(json)
# print the JSON string representation of the object
print(CohortGroup.to_json())

# convert the object into a dict
cohort_group_dict = cohort_group_instance.to_dict()
# create an instance of CohortGroup from a dict
cohort_group_from_dict = CohortGroup.from_dict(cohort_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


