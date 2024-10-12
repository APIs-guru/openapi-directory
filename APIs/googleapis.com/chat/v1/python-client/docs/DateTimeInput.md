# DateTimeInput

Date and time input values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_date** | **bool** | Whether the &#x60;datetime&#x60; input includes a calendar date. | [optional] 
**has_time** | **bool** | Whether the &#x60;datetime&#x60; input includes a timestamp. | [optional] 
**ms_since_epoch** | **str** | Time since epoch time, in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.date_time_input import DateTimeInput

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeInput from a JSON string
date_time_input_instance = DateTimeInput.from_json(json)
# print the JSON string representation of the object
print(DateTimeInput.to_json())

# convert the object into a dict
date_time_input_dict = date_time_input_instance.to_dict()
# create an instance of DateTimeInput from a dict
date_time_input_from_dict = DateTimeInput.from_dict(date_time_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


