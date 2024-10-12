# OutputDateDifference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **float** | Days | [optional] 
**hours** | **float** | Hours | [optional] 
**milliseconds** | **float** | Milliseconds | [optional] 
**minutes** | **float** | Minutes | [optional] 
**months** | **float** | Months | [optional] 
**ticks** | **float** | Ticks | [optional] 
**total_days** | **float** | Total Days | [optional] 
**total_hours** | **float** | Total Hours | [optional] 
**total_milliseconds** | **float** | Total Milliseconds | [optional] 
**total_minutes** | **float** | Total Minutes | [optional] 
**total_months** | **float** | Total Months | [optional] 
**total_seconds** | **float** | Total Seconds | [optional] 
**total_years** | **float** | Total Years | [optional] 
**years** | **float** | Years | [optional] 

## Example

```python
from openapi_client.models.output_date_difference import OutputDateDifference

# TODO update the JSON string below
json = "{}"
# create an instance of OutputDateDifference from a JSON string
output_date_difference_instance = OutputDateDifference.from_json(json)
# print the JSON string representation of the object
print(OutputDateDifference.to_json())

# convert the object into a dict
output_date_difference_dict = output_date_difference_instance.to_dict()
# create an instance of OutputDateDifference from a dict
output_date_difference_from_dict = OutputDateDifference.from_dict(output_date_difference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


