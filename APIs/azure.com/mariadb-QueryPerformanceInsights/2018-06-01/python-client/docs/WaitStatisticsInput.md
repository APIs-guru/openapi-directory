# WaitStatisticsInput

Input to get wait statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WaitStatisticsInputProperties**](WaitStatisticsInputProperties.md) |  | 

## Example

```python
from openapi_client.models.wait_statistics_input import WaitStatisticsInput

# TODO update the JSON string below
json = "{}"
# create an instance of WaitStatisticsInput from a JSON string
wait_statistics_input_instance = WaitStatisticsInput.from_json(json)
# print the JSON string representation of the object
print(WaitStatisticsInput.to_json())

# convert the object into a dict
wait_statistics_input_dict = wait_statistics_input_instance.to_dict()
# create an instance of WaitStatisticsInput from a dict
wait_statistics_input_from_dict = WaitStatisticsInput.from_dict(wait_statistics_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


