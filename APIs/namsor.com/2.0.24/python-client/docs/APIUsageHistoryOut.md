# APIUsageHistoryOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_usage** | [**List[APICounterV2Out]**](APICounterV2Out.md) | Detailed usage as reported by the deduplicating API counter. | [optional] 

## Example

```python
from openapi_client.models.api_usage_history_out import APIUsageHistoryOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIUsageHistoryOut from a JSON string
api_usage_history_out_instance = APIUsageHistoryOut.from_json(json)
# print the JSON string representation of the object
print(APIUsageHistoryOut.to_json())

# convert the object into a dict
api_usage_history_out_dict = api_usage_history_out_instance.to_dict()
# create an instance of APIUsageHistoryOut from a dict
api_usage_history_out_from_dict = APIUsageHistoryOut.from_dict(api_usage_history_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


