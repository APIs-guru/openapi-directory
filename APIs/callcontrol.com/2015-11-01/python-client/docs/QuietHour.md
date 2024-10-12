# QuietHour


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week_list** | **List[str]** |  | [optional] 
**duration_min** | **int** |  | [optional] 
**start_hour_local** | **int** |  | [optional] 
**start_min_local** | **int** |  | [optional] 
**time_zone_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.quiet_hour import QuietHour

# TODO update the JSON string below
json = "{}"
# create an instance of QuietHour from a JSON string
quiet_hour_instance = QuietHour.from_json(json)
# print the JSON string representation of the object
print(QuietHour.to_json())

# convert the object into a dict
quiet_hour_dict = quiet_hour_instance.to_dict()
# create an instance of QuietHour from a dict
quiet_hour_from_dict = QuietHour.from_dict(quiet_hour_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


