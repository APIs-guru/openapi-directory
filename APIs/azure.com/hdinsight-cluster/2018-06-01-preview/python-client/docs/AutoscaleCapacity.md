# AutoscaleCapacity

The load-based autoscale request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instance_count** | **int** | The maximum instance count of the cluster | [optional] 
**min_instance_count** | **int** | The minimum instance count of the cluster | [optional] 

## Example

```python
from openapi_client.models.autoscale_capacity import AutoscaleCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleCapacity from a JSON string
autoscale_capacity_instance = AutoscaleCapacity.from_json(json)
# print the JSON string representation of the object
print(AutoscaleCapacity.to_json())

# convert the object into a dict
autoscale_capacity_dict = autoscale_capacity_instance.to_dict()
# create an instance of AutoscaleCapacity from a dict
autoscale_capacity_from_dict = AutoscaleCapacity.from_dict(autoscale_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


