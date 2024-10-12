# UrlsTimeSeriesResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**time** | **str** |  | [optional] 
**unique_clicks** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.urls_time_series_response_inner import UrlsTimeSeriesResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of UrlsTimeSeriesResponseInner from a JSON string
urls_time_series_response_inner_instance = UrlsTimeSeriesResponseInner.from_json(json)
# print the JSON string representation of the object
print(UrlsTimeSeriesResponseInner.to_json())

# convert the object into a dict
urls_time_series_response_inner_dict = urls_time_series_response_inner_instance.to_dict()
# create an instance of UrlsTimeSeriesResponseInner from a dict
urls_time_series_response_inner_from_dict = UrlsTimeSeriesResponseInner.from_dict(urls_time_series_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


