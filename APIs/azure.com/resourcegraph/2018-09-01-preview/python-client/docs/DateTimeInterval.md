# DateTimeInterval

An interval in time specifying the date and time for the inclusive start and exclusive end, i.e. `[start, end)`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **datetime** | A datetime indicating the exclusive/open end of the time interval, i.e. &#x60;[start, &#x60;**&#x60;end&#x60;**&#x60;)&#x60;. Specifying an &#x60;end&#x60; that occurs chronologically before &#x60;start&#x60; will result in an error. | 
**start** | **datetime** | A datetime indicating the inclusive/closed start of the time interval, i.e. &#x60;[&#x60;**&#x60;start&#x60;**&#x60;, end)&#x60;. Specifying a &#x60;start&#x60; that occurs chronologically after &#x60;end&#x60; will result in an error. | 

## Example

```python
from openapi_client.models.date_time_interval import DateTimeInterval

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeInterval from a JSON string
date_time_interval_instance = DateTimeInterval.from_json(json)
# print the JSON string representation of the object
print(DateTimeInterval.to_json())

# convert the object into a dict
date_time_interval_dict = date_time_interval_instance.to_dict()
# create an instance of DateTimeInterval from a dict
date_time_interval_from_dict = DateTimeInterval.from_dict(date_time_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


