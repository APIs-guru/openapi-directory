# SaveStatsRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_number** | **int** |  | 
**job_id** | **int** |  | 
**stats** | [**AttemptStats**](AttemptStats.md) |  | 
**stream_stats** | [**List[AttemptStreamStats]**](AttemptStreamStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.save_stats_request_body import SaveStatsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SaveStatsRequestBody from a JSON string
save_stats_request_body_instance = SaveStatsRequestBody.from_json(json)
# print the JSON string representation of the object
print(SaveStatsRequestBody.to_json())

# convert the object into a dict
save_stats_request_body_dict = save_stats_request_body_instance.to_dict()
# create an instance of SaveStatsRequestBody from a dict
save_stats_request_body_from_dict = SaveStatsRequestBody.from_dict(save_stats_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


