# AutoscaleTimeAndCapacity

Time and capacity request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instance_count** | **int** | The maximum instance count of the cluster | [optional] 
**min_instance_count** | **int** | The minimum instance count of the cluster | [optional] 
**time** | **str** | 24-hour time in the form xx:xx | [optional] 

## Example

```python
from openapi_client.models.autoscale_time_and_capacity import AutoscaleTimeAndCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleTimeAndCapacity from a JSON string
autoscale_time_and_capacity_instance = AutoscaleTimeAndCapacity.from_json(json)
# print the JSON string representation of the object
print(AutoscaleTimeAndCapacity.to_json())

# convert the object into a dict
autoscale_time_and_capacity_dict = autoscale_time_and_capacity_instance.to_dict()
# create an instance of AutoscaleTimeAndCapacity from a dict
autoscale_time_and_capacity_from_dict = AutoscaleTimeAndCapacity.from_dict(autoscale_time_and_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


