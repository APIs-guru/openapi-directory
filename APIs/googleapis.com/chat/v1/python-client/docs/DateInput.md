# DateInput

Date input values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ms_since_epoch** | **str** | Time since epoch time, in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.date_input import DateInput

# TODO update the JSON string below
json = "{}"
# create an instance of DateInput from a JSON string
date_input_instance = DateInput.from_json(json)
# print the JSON string representation of the object
print(DateInput.to_json())

# convert the object into a dict
date_input_dict = date_input_instance.to_dict()
# create an instance of DateInput from a dict
date_input_from_dict = DateInput.from_dict(date_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


