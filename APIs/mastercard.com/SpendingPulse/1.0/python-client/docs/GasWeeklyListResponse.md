# GasWeeklyListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gas_weekly_list** | [**GasWeeklyList**](GasWeeklyList.md) |  | [optional] 

## Example

```python
from openapi_client.models.gas_weekly_list_response import GasWeeklyListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GasWeeklyListResponse from a JSON string
gas_weekly_list_response_instance = GasWeeklyListResponse.from_json(json)
# print the JSON string representation of the object
print(GasWeeklyListResponse.to_json())

# convert the object into a dict
gas_weekly_list_response_dict = gas_weekly_list_response_instance.to_dict()
# create an instance of GasWeeklyListResponse from a dict
gas_weekly_list_response_from_dict = GasWeeklyListResponse.from_dict(gas_weekly_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


