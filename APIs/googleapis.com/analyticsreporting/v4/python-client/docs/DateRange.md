# DateRange

A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | The end date for the query in the format &#x60;YYYY-MM-DD&#x60;. | [optional] 
**start_date** | **str** | The start date for the query in the format &#x60;YYYY-MM-DD&#x60;. | [optional] 

## Example

```python
from openapi_client.models.date_range import DateRange

# TODO update the JSON string below
json = "{}"
# create an instance of DateRange from a JSON string
date_range_instance = DateRange.from_json(json)
# print the JSON string representation of the object
print(DateRange.to_json())

# convert the object into a dict
date_range_dict = date_range_instance.to_dict()
# create an instance of DateRange from a dict
date_range_from_dict = DateRange.from_dict(date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


