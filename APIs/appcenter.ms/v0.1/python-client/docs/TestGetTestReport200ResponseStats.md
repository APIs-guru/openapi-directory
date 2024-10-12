# TestGetTestReport200ResponseStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | **Dict[str, str]** |  | [optional] 
**devices** | **float** |  | 
**devices_failed** | **float** |  | 
**devices_finished** | **float** |  | 
**devices_not_runned** | **float** |  | 
**devices_skipped** | **float** |  | 
**failed** | **float** |  | 
**filesize** | **float** |  | 
**os** | **float** |  | 
**passed** | **float** |  | 
**skipped** | **float** |  | 
**step_count** | **float** |  | 
**total** | **float** |  | 
**total_device_minutes** | **float** |  | 

## Example

```python
from openapi_client.models.test_get_test_report200_response_stats import TestGetTestReport200ResponseStats

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetTestReport200ResponseStats from a JSON string
test_get_test_report200_response_stats_instance = TestGetTestReport200ResponseStats.from_json(json)
# print the JSON string representation of the object
print(TestGetTestReport200ResponseStats.to_json())

# convert the object into a dict
test_get_test_report200_response_stats_dict = test_get_test_report200_response_stats_instance.to_dict()
# create an instance of TestGetTestReport200ResponseStats from a dict
test_get_test_report200_response_stats_from_dict = TestGetTestReport200ResponseStats.from_dict(test_get_test_report200_response_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


