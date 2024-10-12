# DataRange

Report data range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**custom_start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**range** | **str** | Report data range used to generate the report. | [optional] 

## Example

```python
from openapi_client.models.data_range import DataRange

# TODO update the JSON string below
json = "{}"
# create an instance of DataRange from a JSON string
data_range_instance = DataRange.from_json(json)
# print the JSON string representation of the object
print(DataRange.to_json())

# convert the object into a dict
data_range_dict = data_range_instance.to_dict()
# create an instance of DataRange from a dict
data_range_from_dict = DataRange.from_dict(data_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


