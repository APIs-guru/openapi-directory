# AppStartTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fully_drawn_time** | [**Duration**](Duration.md) |  | [optional] 
**initial_display_time** | [**Duration**](Duration.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_start_time import AppStartTime

# TODO update the JSON string below
json = "{}"
# create an instance of AppStartTime from a JSON string
app_start_time_instance = AppStartTime.from_json(json)
# print the JSON string representation of the object
print(AppStartTime.to_json())

# convert the object into a dict
app_start_time_dict = app_start_time_instance.to_dict()
# create an instance of AppStartTime from a dict
app_start_time_from_dict = AppStartTime.from_dict(app_start_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


