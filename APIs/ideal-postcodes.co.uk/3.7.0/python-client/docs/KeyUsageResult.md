# KeyUsageResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_count** | [**List[KeyUsageResultDailyCountInner]**](KeyUsageResultDailyCountInner.md) | An array of objects representing number of paid lookups made on specific days, ordered by date. Each object contains a &#x60;date&#x60; attribute, which represents the day and a &#x60;count&#x60; attribute, which represents the number of paid lookups made on that day.  | 
**end** | **str** | End date in ISO 8601 format. | 
**start** | **str** | Start date in ISO 8601 format. | 
**total** | **int** | Total of paid lookups performed in specified period. | 

## Example

```python
from openapi_client.models.key_usage_result import KeyUsageResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyUsageResult from a JSON string
key_usage_result_instance = KeyUsageResult.from_json(json)
# print the JSON string representation of the object
print(KeyUsageResult.to_json())

# convert the object into a dict
key_usage_result_dict = key_usage_result_instance.to_dict()
# create an instance of KeyUsageResult from a dict
key_usage_result_from_dict = KeyUsageResult.from_dict(key_usage_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


