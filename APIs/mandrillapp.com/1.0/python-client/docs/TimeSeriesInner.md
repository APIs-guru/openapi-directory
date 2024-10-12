# TimeseriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **int** |  | [optional] 
**complaints** | **int** |  | [optional] 
**hard_bounces** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**rejects** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**soft_bounces** | **int** |  | [optional] 
**time** | **str** |  | [optional] 
**unique_clicks** | **int** |  | [optional] 
**unique_opens** | **int** |  | [optional] 
**unsubs** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.timeseries_inner import TimeseriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TimeseriesInner from a JSON string
timeseries_inner_instance = TimeseriesInner.from_json(json)
# print the JSON string representation of the object
print(TimeseriesInner.to_json())

# convert the object into a dict
timeseries_inner_dict = timeseries_inner_instance.to_dict()
# create an instance of TimeseriesInner from a dict
timeseries_inner_from_dict = TimeseriesInner.from_dict(timeseries_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


