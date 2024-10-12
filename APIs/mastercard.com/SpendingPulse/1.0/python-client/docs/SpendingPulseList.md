# SpendingPulseList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Total number of records returned from the query. | [optional] 
**message** | **str** | Success/Failure. | [optional] 
**spending_pulse_array** | [**SpendingPulseArray**](SpendingPulseArray.md) |  | [optional] 

## Example

```python
from openapi_client.models.spending_pulse_list import SpendingPulseList

# TODO update the JSON string below
json = "{}"
# create an instance of SpendingPulseList from a JSON string
spending_pulse_list_instance = SpendingPulseList.from_json(json)
# print the JSON string representation of the object
print(SpendingPulseList.to_json())

# convert the object into a dict
spending_pulse_list_dict = spending_pulse_list_instance.to_dict()
# create an instance of SpendingPulseList from a dict
spending_pulse_list_from_dict = SpendingPulseList.from_dict(spending_pulse_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


