# SpendingPulseArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spending_pulse_record** | [**List[SpendingPulseRecord]**](SpendingPulseRecord.md) |  | [optional] 

## Example

```python
from openapi_client.models.spending_pulse_array import SpendingPulseArray

# TODO update the JSON string below
json = "{}"
# create an instance of SpendingPulseArray from a JSON string
spending_pulse_array_instance = SpendingPulseArray.from_json(json)
# print the JSON string representation of the object
print(SpendingPulseArray.to_json())

# convert the object into a dict
spending_pulse_array_dict = spending_pulse_array_instance.to_dict()
# create an instance of SpendingPulseArray from a dict
spending_pulse_array_from_dict = SpendingPulseArray.from_dict(spending_pulse_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


