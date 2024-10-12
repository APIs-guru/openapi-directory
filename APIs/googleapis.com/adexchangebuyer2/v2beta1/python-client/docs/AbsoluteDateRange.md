# AbsoluteDateRange

An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.absolute_date_range import AbsoluteDateRange

# TODO update the JSON string below
json = "{}"
# create an instance of AbsoluteDateRange from a JSON string
absolute_date_range_instance = AbsoluteDateRange.from_json(json)
# print the JSON string representation of the object
print(AbsoluteDateRange.to_json())

# convert the object into a dict
absolute_date_range_dict = absolute_date_range_instance.to_dict()
# create an instance of AbsoluteDateRange from a dict
absolute_date_range_from_dict = AbsoluteDateRange.from_dict(absolute_date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


