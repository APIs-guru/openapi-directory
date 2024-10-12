# SpendingPulseListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spending_pulse_list** | [**SpendingPulseList**](SpendingPulseList.md) |  | [optional] 

## Example

```python
from openapi_client.models.spending_pulse_list_response import SpendingPulseListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SpendingPulseListResponse from a JSON string
spending_pulse_list_response_instance = SpendingPulseListResponse.from_json(json)
# print the JSON string representation of the object
print(SpendingPulseListResponse.to_json())

# convert the object into a dict
spending_pulse_list_response_dict = spending_pulse_list_response_instance.to_dict()
# create an instance of SpendingPulseListResponse from a dict
spending_pulse_list_response_from_dict = SpendingPulseListResponse.from_dict(spending_pulse_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


