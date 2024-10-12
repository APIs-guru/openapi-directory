# InputDataChange

Details about the input data change insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**records_read_diff_percentage** | **float** | Output only. Records read difference percentage compared to a previous run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.input_data_change import InputDataChange

# TODO update the JSON string below
json = "{}"
# create an instance of InputDataChange from a JSON string
input_data_change_instance = InputDataChange.from_json(json)
# print the JSON string representation of the object
print(InputDataChange.to_json())

# convert the object into a dict
input_data_change_dict = input_data_change_instance.to_dict()
# create an instance of InputDataChange from a dict
input_data_change_from_dict = InputDataChange.from_dict(input_data_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


