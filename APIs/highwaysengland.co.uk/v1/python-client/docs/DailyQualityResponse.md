# DailyQualityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qualities** | [**List[Qualities]**](Qualities.md) |  | [optional] 
**row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.daily_quality_response import DailyQualityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DailyQualityResponse from a JSON string
daily_quality_response_instance = DailyQualityResponse.from_json(json)
# print the JSON string representation of the object
print(DailyQualityResponse.to_json())

# convert the object into a dict
daily_quality_response_dict = daily_quality_response_instance.to_dict()
# create an instance of DailyQualityResponse from a dict
daily_quality_response_from_dict = DailyQualityResponse.from_dict(daily_quality_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


