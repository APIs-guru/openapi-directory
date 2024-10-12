# CompensationEntry

A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Money**](Money.md) |  | [optional] 
**description** | **str** | Optional. Compensation description. For example, could indicate equity terms or provide additional context to an estimated bonus. | [optional] 
**expected_units_per_year** | **float** | Optional. Expected number of units paid each year. If not specified, when Job.employment_types is FULLTIME, a default value is inferred based on unit. Default values: - HOURLY: 2080 - DAILY: 260 - WEEKLY: 52 - MONTHLY: 12 - ANNUAL: 1 | [optional] 
**range** | [**CompensationRange**](CompensationRange.md) |  | [optional] 
**type** | **str** | Optional. Compensation type. Default is CompensationUnit.COMPENSATION_TYPE_UNSPECIFIED. | [optional] 
**unit** | **str** | Optional. Frequency of the specified amount. Default is CompensationUnit.COMPENSATION_UNIT_UNSPECIFIED. | [optional] 

## Example

```python
from openapi_client.models.compensation_entry import CompensationEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CompensationEntry from a JSON string
compensation_entry_instance = CompensationEntry.from_json(json)
# print the JSON string representation of the object
print(CompensationEntry.to_json())

# convert the object into a dict
compensation_entry_dict = compensation_entry_instance.to_dict()
# create an instance of CompensationEntry from a dict
compensation_entry_from_dict = CompensationEntry.from_dict(compensation_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


