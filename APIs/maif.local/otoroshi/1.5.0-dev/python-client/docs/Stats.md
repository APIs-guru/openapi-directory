# Stats

Live stats for a service or globally

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls** | **int** | Number of calls on the specified service or globally | 
**concurrent_handled_requests** | **int** | The number of concurrent request currently | 
**data_in** | **int** | The amount of data sent to the specified service or Otoroshi globally | 
**data_in_rate** | **float** | The rate of data sent to the specified service or Otoroshi globally | 
**data_out** | **int** | The amount of data sent from the specified service or Otoroshi globally | 
**data_out_rate** | **float** | The rate of data sent from the specified service or Otoroshi globally | 
**duration** | **float** | The average duration for a call | 
**overhead** | **float** | The average overhead time induced by Otoroshi for each call | 
**rate** | **float** | The rate of data sent from and to the specified service or Otoroshi globally | 

## Example

```python
from openapi_client.models.stats import Stats

# TODO update the JSON string below
json = "{}"
# create an instance of Stats from a JSON string
stats_instance = Stats.from_json(json)
# print the JSON string representation of the object
print(Stats.to_json())

# convert the object into a dict
stats_dict = stats_instance.to_dict()
# create an instance of Stats from a dict
stats_from_dict = Stats.from_dict(stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


