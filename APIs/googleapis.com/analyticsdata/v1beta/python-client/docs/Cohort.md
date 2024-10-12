# Cohort

Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimension** | **str** | Dimension used by the cohort. Required and only supports &#x60;firstSessionDate&#x60;. | [optional] 
**name** | **str** | Assigns a name to this cohort. The dimension &#x60;cohort&#x60; is valued to this name in a report response. If set, cannot begin with &#x60;cohort_&#x60; or &#x60;RESERVED_&#x60;. If not set, cohorts are named by their zero based index &#x60;cohort_0&#x60;, &#x60;cohort_1&#x60;, etc. | [optional] 

## Example

```python
from openapi_client.models.cohort import Cohort

# TODO update the JSON string below
json = "{}"
# create an instance of Cohort from a JSON string
cohort_instance = Cohort.from_json(json)
# print the JSON string representation of the object
print(Cohort.to_json())

# convert the object into a dict
cohort_dict = cohort_instance.to_dict()
# create an instance of Cohort from a dict
cohort_from_dict = Cohort.from_dict(cohort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


