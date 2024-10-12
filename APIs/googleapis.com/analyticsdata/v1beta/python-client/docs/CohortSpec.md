# CohortSpec

The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cohort_report_settings** | [**CohortReportSettings**](CohortReportSettings.md) |  | [optional] 
**cohorts** | [**List[Cohort]**](Cohort.md) | Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If multiple cohorts are specified, each cohort can be recognized in the report by their name. | [optional] 
**cohorts_range** | [**CohortsRange**](CohortsRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.cohort_spec import CohortSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CohortSpec from a JSON string
cohort_spec_instance = CohortSpec.from_json(json)
# print the JSON string representation of the object
print(CohortSpec.to_json())

# convert the object into a dict
cohort_spec_dict = cohort_spec_instance.to_dict()
# create an instance of CohortSpec from a dict
cohort_spec_from_dict = CohortSpec.from_dict(cohort_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


