# CohortsRange

Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_offset** | **int** | Required. &#x60;endOffset&#x60; specifies the end date of the extended reporting date range for a cohort report. &#x60;endOffset&#x60; can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If &#x60;granularity&#x60; is &#x60;DAILY&#x60;, the &#x60;endDate&#x60; of the extended reporting date range is &#x60;endDate&#x60; of the cohort plus &#x60;endOffset&#x60; days. If &#x60;granularity&#x60; is &#x60;WEEKLY&#x60;, the &#x60;endDate&#x60; of the extended reporting date range is &#x60;endDate&#x60; of the cohort plus &#x60;endOffset * 7&#x60; days. If &#x60;granularity&#x60; is &#x60;MONTHLY&#x60;, the &#x60;endDate&#x60; of the extended reporting date range is &#x60;endDate&#x60; of the cohort plus &#x60;endOffset * 30&#x60; days. | [optional] 
**granularity** | **str** | Required. The granularity used to interpret the &#x60;startOffset&#x60; and &#x60;endOffset&#x60; for the extended reporting date range for a cohort report. | [optional] 
**start_offset** | **int** | &#x60;startOffset&#x60; specifies the start date of the extended reporting date range for a cohort report. &#x60;startOffset&#x60; is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If &#x60;granularity&#x60; is &#x60;DAILY&#x60;, the &#x60;startDate&#x60; of the extended reporting date range is &#x60;startDate&#x60; of the cohort plus &#x60;startOffset&#x60; days. If &#x60;granularity&#x60; is &#x60;WEEKLY&#x60;, the &#x60;startDate&#x60; of the extended reporting date range is &#x60;startDate&#x60; of the cohort plus &#x60;startOffset * 7&#x60; days. If &#x60;granularity&#x60; is &#x60;MONTHLY&#x60;, the &#x60;startDate&#x60; of the extended reporting date range is &#x60;startDate&#x60; of the cohort plus &#x60;startOffset * 30&#x60; days. | [optional] 

## Example

```python
from openapi_client.models.cohorts_range import CohortsRange

# TODO update the JSON string below
json = "{}"
# create an instance of CohortsRange from a JSON string
cohorts_range_instance = CohortsRange.from_json(json)
# print the JSON string representation of the object
print(CohortsRange.to_json())

# convert the object into a dict
cohorts_range_dict = cohorts_range_instance.to_dict()
# create an instance of CohortsRange from a dict
cohorts_range_from_dict = CohortsRange.from_dict(cohorts_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


