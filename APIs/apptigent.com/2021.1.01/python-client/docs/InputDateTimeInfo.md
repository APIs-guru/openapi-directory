# InputDateTimeInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**culture** | **str** | Language culture | [default to 'en-US']
**input** | **str** | Source date and time | 

## Example

```python
from openapi_client.models.input_date_time_info import InputDateTimeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InputDateTimeInfo from a JSON string
input_date_time_info_instance = InputDateTimeInfo.from_json(json)
# print the JSON string representation of the object
print(InputDateTimeInfo.to_json())

# convert the object into a dict
input_date_time_info_dict = input_date_time_info_instance.to_dict()
# create an instance of InputDateTimeInfo from a dict
input_date_time_info_from_dict = InputDateTimeInfo.from_dict(input_date_time_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


