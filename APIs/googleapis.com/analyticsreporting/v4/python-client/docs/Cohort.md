# Cohort

Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**name** | **str** | A unique name for the cohort. If not defined name will be auto-generated with values cohort_[1234...]. | [optional] 
**type** | **str** | Type of the cohort. The only supported type as of now is &#x60;FIRST_VISIT_DATE&#x60;. If this field is unspecified the cohort is treated as &#x60;FIRST_VISIT_DATE&#x60; type cohort. | [optional] 

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


